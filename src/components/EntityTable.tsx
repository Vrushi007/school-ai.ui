import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
  Chip,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreVert, Edit, Delete } from "@mui/icons-material";

interface Column {
  field: string;
  header: string;
  width?: string;
}

interface EntityTableProps {
  data: any[];
  columns: Column[];
  loading: boolean;
  error: string | null;
  entityName: string;
  onRowClick?: (row: any) => void;
  onEdit?: (row: any) => void;
}

const EntityTable: React.FC<EntityTableProps> = ({
  data,
  columns,
  loading,
  error,
  entityName,
  onRowClick,
  onEdit,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedRowId, setSelectedRowId] = useState<any>(null);

  const handleMenuClick = (e: React.MouseEvent<HTMLElement>, rowId: any) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
    setSelectedRowId(rowId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRowId(null);
  };

  const handleEdit = () => {
    const selectedRow = data.find((row) => row.id === selectedRowId);
    if (selectedRow && onEdit) {
      onEdit(selectedRow);
    }
    handleMenuClose();
  };

  const renderCellValue = (value: any, field: string) => {
    if (value === null || value === undefined) {
      return (
        <Typography variant="body2" color="text.secondary">
          -
        </Typography>
      );
    }

    if (typeof value === "boolean") {
      return (
        <Chip
          label={value ? "Yes" : "No"}
          color={value ? "success" : "default"}
          size="small"
        />
      );
    }

    if (typeof value === "object") {
      return (
        <Typography variant="body2" sx={{ maxWidth: 300, overflow: "auto" }}>
          {JSON.stringify(value, null, 2)}
        </Typography>
      );
    }

    return <Typography variant="body2">{String(value)}</Typography>;
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 400,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="info">No {entityName} found</Alert>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ maxHeight: "calc(100vh - 200px)" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                fontWeight: 600,
                backgroundColor: "primary.main",
                color: "white",
                width: "60px",
              }}
            >
              #
            </TableCell>
            {columns.map((column) => (
              <TableCell
                key={column.field}
                sx={{
                  fontWeight: 600,
                  backgroundColor: "primary.main",
                  color: "white",
                  width: column.width || "auto",
                }}
              >
                {column.header}
              </TableCell>
            ))}
            <TableCell
              sx={{
                fontWeight: 600,
                backgroundColor: "primary.main",
                color: "white",
                width: "60px",
                textAlign: "center",
              }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={row.id || index}
              onClick={() => onRowClick?.(row)}
              sx={{
                "&:nth-of-type(odd)": { backgroundColor: "action.hover" },
                "&:hover": {
                  backgroundColor: "action.selected",
                  cursor: onRowClick ? "pointer" : "default",
                },
              }}
            >
              <TableCell>
                <Typography variant="body2" fontWeight={500}>
                  {index + 1}
                </Typography>
              </TableCell>
              {columns.map((column) => (
                <TableCell key={column.field}>
                  {renderCellValue(row[column.field], column.field)}
                </TableCell>
              ))}
              <TableCell align="center">
                <IconButton
                  size="small"
                  onClick={(e) => handleMenuClick(e, row.id)}
                  sx={{ color: "primary.main" }}
                >
                  <MoreVert fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleEdit}>
          <Edit fontSize="small" sx={{ mr: 1 }} />
          Edit
        </MenuItem>
      </Menu>
    </TableContainer>
  );
};

export default EntityTable;
