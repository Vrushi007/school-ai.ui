import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Container,
  IconButton,
  Slide,
  Button,
} from "@mui/material";
import {
  Public,
  School,
  Class as ClassIcon,
  Subject as SubjectIcon,
  Book,
  Close,
  ChevronRight,
  Add,
  SmartToy as SmartToyIcon,
  Business as BusinessIcon,
  People as PeopleIcon,
  CheckCircle,
  Block,
} from "@mui/icons-material";
import EntityTable from "../EntityTable";
import EditModal from "../EditModal";
import { ENTITIES, EntityMetadata } from "../../services/contentService";
import GenerateKPs from "./GenerateKPs";
import { useAuth } from "../../contexts/AuthContext";
import * as authAdminService from "../../services/authAdminService";

interface EntityItem {
  key: string;
  label: string;
  icon: React.ReactElement;
  metadata: EntityMetadata;
}

interface Pane {
  id: string;
  entityKey: string;
  title: string;
  data: any[];
  loading: boolean;
  error: string | null;
  selectedRow?: any;
  parentId?: number;
}

interface ModalState {
  open: boolean;
  entityKey: string | null;
  isNew: boolean;
  data: Record<string, any> | null;
  parentId?: number | null;
  parentIdField?: string | null;
  disabledFields?: string[];
}

const Admin: React.FC = () => {
  const { user } = useAuth();
  const [panes, setPanes] = useState<Pane[]>([]);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [modal, setModal] = useState<ModalState>({
    open: false,
    entityKey: null,
    isNew: false,
    data: null,
    parentId: null,
    parentIdField: null,
    disabledFields: [],
  });

  const isSystemAdmin = user?.role.name === "system_admin";
  const isOrgAdmin = user?.role.name === "school_admin"; // Note: keeping role name as is
  const isAdmin = isSystemAdmin || isOrgAdmin;

  // Helper function to get entity metadata
  const getEntity = (entityKey: string): EntityMetadata => {
    return AUTH_ENTITIES[entityKey] || ENTITIES[entityKey];
  };

  // Auth admin entities configuration
  const AUTH_ENTITIES: Record<string, EntityMetadata> = {
    organizations: {
      name: "Organizations",
      fetchFunction: authAdminService.fetchOrganizations,
      createFunction: authAdminService.createOrganization,
      updateFunction: authAdminService.updateOrganization,
      deleteFunction: authAdminService.deleteOrganization,
      columns: [
        { field: "id", header: "ID", width: "80px" },
        { field: "name", header: "Organization Name" },
        { field: "code", header: "Code", width: "120px" },
        { field: "city", header: "City", width: "150px" },
        { field: "state", header: "State", width: "150px" },
        { field: "isActive", header: "Active", width: "100px" },
      ],
      editFields: [
        {
          name: "name",
          label: "Organization Name",
          type: "text",
          required: true,
        },
        {
          name: "code",
          label: "Organization Code",
          type: "text",
          required: true,
        },
        {
          name: "address",
          label: "Address",
          type: "text",
          multiline: true,
          rows: 2,
        },
        { name: "city", label: "City", type: "text" },
        { name: "state", label: "State", type: "text" },
        { name: "country", label: "Country", type: "text" },
        { name: "postalCode", label: "Postal Code", type: "text" },
        { name: "phone", label: "Phone", type: "text" },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "website", label: "Website", type: "text" },
        { name: "isActive", label: "Active", type: "checkbox" },
      ],
      onSubmit: async (data: Record<string, any>, isNew: boolean) => {
        if (isNew) {
          // Map form data to CreateOrganizationData shape
          const orgPayload = {
            name: data.name,
            code: data.code,
            address: data.address,
            city: data.city,
            state: data.state,
            country: data.country,
            postalCode: data.postalCode,
            phone: data.phone,
            email: data.email,
            website: data.website,
            isActive: data.isActive,
          };
          await authAdminService.createOrganization(orgPayload);
        } else {
          const { id, ...updateData } = data;
          await authAdminService.updateOrganization(id, updateData);
        }
      },
    },
    users: {
      name: "Users",
      fetchFunction: async () => {
        // Organization admins only see users from their organization
        if (isOrgAdmin && user?.organizationId) {
          return authAdminService.fetchUsers(user.organizationId);
        }
        return authAdminService.fetchUsers();
      },
      createFunction: async (data: any) => {
        // Organization admin: auto-set organization_id to their organization
        if (isOrgAdmin && user?.organizationId) {
          data.organizationId = user.organizationId;
        }
        // Add default password if not provided
        if (!data.password) {
          data.password = "Welcome@123"; // Default password
        }
        return authAdminService.createUser(data);
      },
      updateFunction: authAdminService.updateUser,
      deleteFunction: authAdminService.deleteUser,
      columns: [
        { field: "id", header: "ID", width: "80px" },
        { field: "fullName", header: "Full Name" },
        { field: "username", header: "Username" },
        { field: "email", header: "Email" },
        { field: "role.name", header: "Role", width: "150px" },
        { field: "organization.name", header: "Organization", width: "180px" },
        { field: "isActive", header: "Active", width: "100px" },
      ],
      editFields: [
        { name: "fullName", label: "Full Name", type: "text", required: true },
        { name: "username", label: "Username", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        {
          name: "password",
          label: "Password",
          type: "text",
          required: true,
        },
        {
          name: "roleId",
          label: "Role",
          type: "select",
          required: true,
          fetchOptions: async () => {
            const roles = await authAdminService.fetchRoles();
            // System admin can assign any role
            if (isSystemAdmin) {
              return roles.map((r) => ({ value: r.id, label: r.description }));
            }
            // Organization admin can only assign teacher, parent, student roles
            return roles
              .filter((r) => ["teacher", "parent", "student"].includes(r.name))
              .map((r) => ({ value: r.id, label: r.description }));
          },
        },
        {
          name: "organizationId",
          label: "Organization",
          type: "select",
          required: !isOrgAdmin, // Not required for org admin (auto-filled)
          fetchOptions: async () => {
            if (isOrgAdmin && user?.organization) {
              // Organization admin can only assign to their organization
              return [
                { value: user.organizationId!, label: user.organization.name },
              ];
            }
            // System admin can assign to any organization
            const organizations = await authAdminService.fetchOrganizations();
            return organizations.map((o) => ({ value: o.id, label: o.name }));
          },
        },
        { name: "isActive", label: "Active", type: "checkbox" },
      ],
      onSubmit: async (data: Record<string, any>, isNew: boolean) => {
        if (isNew) {
          // Organization admin: auto-set organization_id to their organization
          if (isOrgAdmin && user?.organizationId) {
            data.organizationId = user.organizationId;
          }
          // Add default password if not provided
          if (!data.password) {
            data.password = "Welcome@123";
          }
          // Ensure required fields for CreateUserData
          const userPayload = {
            email: data.email,
            username: data.username,
            password: data.password,
            full_name: data.fullName ?? data.full_name, // handle both camelCase and snake_case
            role_id: data.roleId ?? data.role_id,
            organization_id: data.organizationId ?? data.organization_id,
            is_active: data.isActive ?? data.is_active,
          };
          await authAdminService.createUser(userPayload);
        } else {
          // Update user - password field is not included/editable
          const { id, password, ...updateData } = data;
          await authAdminService.updateUser(id, updateData);
        }
      },
    },
  };

  const entities: EntityItem[] = [
    // Auth entities (only for admins)
    ...(isSystemAdmin
      ? [
          {
            key: "organizations",
            label: "Manage Organizations",
            icon: <BusinessIcon />,
            metadata: AUTH_ENTITIES.organizations,
          },
        ]
      : []),
    ...(isAdmin
      ? [
          {
            key: "users",
            label: "Manage Users",
            icon: <PeopleIcon />,
            metadata: AUTH_ENTITIES.users,
          },
        ]
      : []),
    // Content entities
    {
      key: "states",
      label: "States",
      icon: <Public />,
      metadata: ENTITIES.states,
    },
    {
      key: "boards",
      label: "Boards",
      icon: <School />,
      metadata: ENTITIES.boards,
    },
  ];

  const getEntityIcon = (key: string) => {
    const iconMap: Record<string, React.ReactElement> = {
      organizations: <BusinessIcon />,
      users: <PeopleIcon />,
      states: <Public />,
      boards: <School />,
      classes: <ClassIcon />,
      subjects: <SubjectIcon />,
      chapters: <Book />,
    };
    return iconMap[key] || <ChevronRight />;
  };

  const handleEntityClick = async (entityKey: string) => {
    // Special handling for GenerateKPs
    if (entityKey === "generateKPs") {
      setSelectedMenu("generateKPs");
      return;
    }

    // Close all panes and start fresh
    setPanes([]);
    setSelectedMenu(null);

    const paneId = `${entityKey}-${Date.now()}`;
    // Check both AUTH_ENTITIES and ENTITIES
    const entity = AUTH_ENTITIES[entityKey] || ENTITIES[entityKey];

    // Add loading pane
    setPanes([
      {
        id: paneId,
        entityKey,
        title: entity.name,
        data: [],
        loading: true,
        error: null,
      },
    ]);

    try {
      const result = await entity.fetchFunction();
      setPanes([
        {
          id: paneId,
          entityKey,
          title: entity.name,
          data: result,
          loading: false,
          error: null,
        },
      ]);
    } catch (err) {
      setPanes([
        {
          id: paneId,
          entityKey,
          title: entity.name,
          data: [],
          loading: false,
          error: err instanceof Error ? err.message : "Failed to fetch data",
        },
      ]);
    }
  };

  const handleRowClick = async (paneIndex: number, row: any) => {
    const currentPane = panes[paneIndex];
    const entity = getEntity(currentPane.entityKey);

    // If this entity has no child, don't do anything
    if (!entity.childEntity || !entity.childFetchFunction) {
      return;
    }

    // Close all panes after current one
    const newPanes = panes.slice(0, paneIndex + 1);

    // Update selected row for current pane
    newPanes[paneIndex] = { ...currentPane, selectedRow: row };

    const childEntityKey = entity.childEntity;
    const childEntity = getEntity(childEntityKey);
    const paneId = `${childEntityKey}-${row.id}-${Date.now()}`;

    // Add loading pane for child
    setPanes([
      ...newPanes,
      {
        id: paneId,
        entityKey: childEntityKey,
        title: `${childEntity.name} (${
          row.name || row.title || `ID: ${row.id}`
        })`,
        data: [],
        loading: true,
        error: null,
      },
    ]);

    try {
      const parentIdField = entity.parentIdField || "id";
      const result = await entity.childFetchFunction(row[parentIdField]);

      setPanes((prev) => {
        const updated = [...prev];
        const lastIndex = updated.length - 1;
        updated[lastIndex] = {
          ...updated[lastIndex],
          data: result,
          loading: false,
          error: null,
        };
        return updated;
      });
    } catch (err) {
      setPanes((prev) => {
        const updated = [...prev];
        const lastIndex = updated.length - 1;
        updated[lastIndex] = {
          ...updated[lastIndex],
          loading: false,
          error: err instanceof Error ? err.message : "Failed to fetch data",
        };
        return updated;
      });
    }
  };

  const handleClosePane = (paneIndex: number) => {
    // Close this pane and all panes after it
    setPanes(panes.slice(0, paneIndex));
  };

  const handleOpenEditModal = (
    entityKey: string,
    row?: any,
    parentId?: number,
    parentIdField?: string,
    additionalDefaults?: Record<string, any>,
    disabledFields?: string[],
  ) => {
    const initialData = row || {};
    // If adding a new item with a parent context, auto-populate the parent ID field
    if (!row && parentId && parentIdField) {
      initialData[parentIdField] = parentId;
    }
    // Apply additional default values
    if (!row && additionalDefaults) {
      Object.assign(initialData, additionalDefaults);
    }
    setModal({
      open: true,
      entityKey,
      isNew: !row,
      data: initialData,
      parentId: !row ? parentId : undefined,
      parentIdField: !row ? parentIdField : undefined,
      disabledFields: disabledFields || [],
    });
  };

  const handleCloseModal = () => {
    setModal({
      open: false,
      entityKey: null,
      isNew: false,
      data: null,
      parentId: null,
      parentIdField: null,
      disabledFields: [],
    });
  };

  const handleToggleUserActivation = async (user: any) => {
    try {
      const newIsActive = !user.isActive;
      await authAdminService.updateUser(user.id, {
        is_active: newIsActive,
      } as any);
      
      // Refresh the users pane
      const usersPaneIndex = panes.findIndex((p) => p.entityKey === "users");
      if (usersPaneIndex >= 0) {
        const entity = getEntity("users");
        const result = await entity.fetchFunction();
        
        setPanes((prev) => {
          const updated = [...prev];
          updated[usersPaneIndex] = {
            ...updated[usersPaneIndex],
            data: result,
          };
          return updated;
        });
      }
    } catch (err) {
      console.error("Failed to toggle user activation:", err);
      alert(
        "Failed to update user activation status. Please try again.",
      );
    }
  };

  const handleModalSubmit = async (formData: Record<string, any>) => {
    if (!modal.entityKey) return;

    const entity = getEntity(modal.entityKey);
    if (!entity.onSubmit) {
      throw new Error("No submit handler for this entity");
    }

    await entity.onSubmit(formData, modal.isNew);

    // Refresh the current pane data
    if (panes.length > 0) {
      const currentPane = panes[panes.length - 1];
      try {
        let result: any[] = [];
        if (currentPane.entityKey === modal.entityKey) {
          result = await getEntity(currentPane.entityKey).fetchFunction();
        }

        setPanes((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...updated[updated.length - 1],
            data: result,
          };
          return updated;
        });
      } catch (err) {
        console.error("Failed to refresh pane data:", err);
      }
    }

    handleCloseModal();
  };

  const handleAddClick = (paneIndex: number) => {
    const pane = panes[paneIndex];
    const entity = getEntity(pane.entityKey);

    // If this pane has a parent pane, get the parent ID to auto-populate
    let parentId: number | undefined;
    let parentIdField: string | undefined;

    if (paneIndex > 0) {
      const parentPane = panes[paneIndex - 1];
      const parentEntity = getEntity(parentPane.entityKey);

      // Check if current entity should have parent ID populated
      if (
        parentEntity.childEntity === pane.entityKey &&
        parentPane.selectedRow
      ) {
        // Look for parent ID field (supports both snake_case like state_id and camelCase like boardId)
        parentIdField = entity.editFields?.find(
          (f) =>
            (f.name.includes("_id") || f.name.includes("Id")) &&
            f.name !== "id",
        )?.name;

        if (parentIdField) {
          const sourceField = parentEntity.parentIdField || "id";
          parentId = parentPane.selectedRow[sourceField];
        }
      }
    }

    // Prepare additional default values
    const additionalDefaults: Record<string, any> = {};
    const fieldsToDisable: string[] = [];

    // Set isActive to true by default
    if (entity.editFields?.some((f) => f.name === "isActive")) {
      additionalDefaults.isActive = true;
    }

    // For entities with displayOrder, set it to the next number
    if (entity.editFields?.some((f) => f.name === "displayOrder")) {
      const maxDisplayOrder = pane.data.reduce((max, item) => {
        const order = item.displayOrder || 0;
        return order > max ? order : max;
      }, 0);
      additionalDefaults.displayOrder = maxDisplayOrder + 1;
      fieldsToDisable.push("displayOrder");
    }

    // Add parent ID field to disabled fields
    if (parentIdField) {
      fieldsToDisable.push(parentIdField);
    }

    handleOpenEditModal(
      pane.entityKey,
      undefined,
      parentId,
      parentIdField,
      additionalDefaults,
      fieldsToDisable,
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      <Box
        sx={{ display: "flex", gap: 2, minHeight: "70vh", overflow: "hidden" }}
      >
        {/* Sidebar */}
        <Paper
          elevation={3}
          sx={{
            width: 280,
            flexShrink: 0,
            overflow: "auto",
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Entities
            </Typography>
          </Box>
          <Divider />
          <List>
            {entities.map((entity) => (
              <ListItem key={entity.key} disablePadding>
                <ListItemButton
                  onClick={() => handleEntityClick(entity.key)}
                  sx={{
                    "&:hover": {
                      backgroundColor: "primary.light",
                      color: "primary.contrastText",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      width: "100%",
                    }}
                  >
                    {entity.icon}
                    <ListItemText primary={entity.label} />
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider />
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleEntityClick("generateKPs")}
                selected={selectedMenu === "generateKPs"}
                sx={{
                  backgroundColor:
                    selectedMenu === "generateKPs"
                      ? "primary.light"
                      : "inherit",
                  color:
                    selectedMenu === "generateKPs"
                      ? "primary.contrastText"
                      : "inherit",
                  "&:hover": {
                    backgroundColor: "primary.light",
                    color: "primary.contrastText",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  <SmartToyIcon />
                  <ListItemText primary="View/Generate KPs" />
                </Box>
              </ListItemButton>
            </ListItem>
          </List>
        </Paper>

        {/* Sliding Panes Container or GenerateKPs */}
        {selectedMenu === "generateKPs" ? (
          <Paper
            elevation={3}
            sx={{
              flexGrow: 1,
              overflow: "auto",
              backgroundColor: "#f9f9f9",
            }}
          >
            <GenerateKPs />
          </Paper>
        ) : (
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              gap: 2,
              overflow: "auto",
              pb: 2,
            }}
          >
            {panes.length === 0 ? (
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: 400,
                  flexGrow: 1,
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  Select an entity from the sidebar to view data
                </Typography>
              </Paper>
            ) : (
              panes.map((pane, index) => {
                const entity = getEntity(pane.entityKey);
                const hasChildren = !!entity.childEntity;

                return (
                  <Slide
                    key={pane.id}
                    direction="left"
                    in={true}
                    mountOnEnter
                    unmountOnExit
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        minWidth: 500,
                        maxWidth: 600,
                        flexShrink: 0,
                        display: "flex",
                        flexDirection: "column",
                        maxHeight: "calc(100vh - 150px)",
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          borderBottom: 1,
                          borderColor: "divider",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          backgroundColor: "primary.main",
                          color: "white",
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          {getEntityIcon(pane.entityKey)}
                          <Typography variant="h6" fontWeight={600}>
                            {pane.title}
                          </Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Button
                            size="small"
                            variant="contained"
                            color="inherit"
                            startIcon={<Add />}
                            onClick={() => handleAddClick(index)}
                            sx={{
                              textTransform: "none",
                              fontWeight: 500,
                              color: "primary.main",
                            }}
                          >
                            Add
                          </Button>
                          {index > 0 && (
                            <IconButton
                              size="small"
                              onClick={() => handleClosePane(index)}
                              sx={{ color: "white" }}
                            >
                              <Close />
                            </IconButton>
                          )}
                        </Box>
                      </Box>
                      <Box sx={{ overflow: "auto", flexGrow: 1 }}>
                        <EntityTable
                          data={pane.data}
                          columns={entity.columns}
                          loading={pane.loading}
                          error={pane.error}
                          entityName={entity.name}
                          onRowClick={
                            hasChildren
                              ? (row) => handleRowClick(index, row)
                              : undefined
                          }
                          onEdit={(row) =>
                            handleOpenEditModal(pane.entityKey, row)
                          }
                          customActions={
                            pane.entityKey === "users"
                              ? [
                                  {
                                    label: "Activate User",
                                    icon: (
                                      <CheckCircle
                                        fontSize="small"
                                        color="success"
                                      />
                                    ),
                                    onClick: handleToggleUserActivation,
                                    condition: (row: any) => !row.isActive,
                                  },
                                  {
                                    label: "Deactivate User",
                                    icon: (
                                      <Block fontSize="small" color="error" />
                                    ),
                                    onClick: handleToggleUserActivation,
                                    condition: (row: any) => row.isActive,
                                  },
                                ]
                              : undefined
                          }
                        />
                      </Box>
                    </Paper>
                  </Slide>
                );
              })
            )}
          </Box>
        )}
      </Box>

      {modal.entityKey && (
        <EditModal
          open={modal.open}
          title={`${modal.isNew ? "Add New" : "Edit"} ${
            getEntity(modal.entityKey).name
          }`}
          fields={
            // Filter out password field when editing users
            modal.entityKey === "users" && !modal.isNew
              ? (getEntity(modal.entityKey).editFields || []).filter(
                  (field) => field.name !== "password",
                )
              : getEntity(modal.entityKey).editFields || []
          }
          initialData={modal.data || {}}
          onClose={handleCloseModal}
          onSubmit={handleModalSubmit}
          disabledFields={modal.disabledFields || []}
        />
      )}
    </Container>
  );
};

export default Admin;
