import React, { useState, useEffect } from "react";
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
  MenuBook,
  Class as ClassIcon,
  Subject as SubjectIcon,
  Book,
  Close,
  ChevronRight,
  Add,
} from "@mui/icons-material";
import EntityTable from "./EntityTable";
import EditModal from "./EditModal";
import { ENTITIES, EntityMetadata } from "../services/contentService";

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
}

const Admin: React.FC = () => {
  const [panes, setPanes] = useState<Pane[]>([]);
  const [modal, setModal] = useState<ModalState>({
    open: false,
    entityKey: null,
    isNew: false,
    data: null,
  });

  const entities: EntityItem[] = [
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
    {
      key: "syllabus",
      label: "Syllabus",
      icon: <MenuBook />,
      metadata: ENTITIES.syllabus,
    },
  ];

  const getEntityIcon = (key: string) => {
    const iconMap: Record<string, React.ReactElement> = {
      states: <Public />,
      boards: <School />,
      syllabus: <MenuBook />,
      classes: <ClassIcon />,
      subjects: <SubjectIcon />,
      chapters: <Book />,
    };
    return iconMap[key] || <ChevronRight />;
  };

  const handleEntityClick = async (entityKey: string) => {
    // Close all panes and start fresh
    setPanes([]);

    const paneId = `${entityKey}-${Date.now()}`;
    const entity = ENTITIES[entityKey];

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
    const entity = ENTITIES[currentPane.entityKey];

    // If this entity has no child, don't do anything
    if (!entity.childEntity || !entity.childFetchFunction) {
      return;
    }

    // Close all panes after current one
    const newPanes = panes.slice(0, paneIndex + 1);

    // Update selected row for current pane
    newPanes[paneIndex] = { ...currentPane, selectedRow: row };

    const childEntityKey = entity.childEntity;
    const childEntity = ENTITIES[childEntityKey];
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

  const handleOpenEditModal = (entityKey: string, row?: any) => {
    setModal({
      open: true,
      entityKey,
      isNew: !row,
      data: row || {},
    });
  };

  const handleCloseModal = () => {
    setModal({ open: false, entityKey: null, isNew: false, data: null });
  };

  const handleModalSubmit = async (formData: Record<string, any>) => {
    if (!modal.entityKey) return;

    const entity = ENTITIES[modal.entityKey];
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
          result = await ENTITIES[currentPane.entityKey].fetchFunction();
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
    handleOpenEditModal(pane.entityKey);
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
          </List>
        </Paper>

        {/* Sliding Panes Container */}
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
              const entity = ENTITIES[pane.entityKey];
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
                      />
                    </Box>
                  </Paper>
                </Slide>
              );
            })
          )}
        </Box>
      </Box>

      {modal.entityKey && (
        <EditModal
          open={modal.open}
          title={`${modal.isNew ? "Add New" : "Edit"} ${
            ENTITIES[modal.entityKey].name
          }`}
          fields={ENTITIES[modal.entityKey].editFields || []}
          initialData={modal.data || {}}
          onClose={handleCloseModal}
          onSubmit={handleModalSubmit}
        />
      )}
    </Container>
  );
};

export default Admin;
