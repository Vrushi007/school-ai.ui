import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import {
  CheckCircle as SuccessIcon,
  Error as ErrorIcon,
  Info as InfoIcon,
  Warning as WarningIcon,
} from "@mui/icons-material";

interface AlertModalProps {
  open: boolean;
  title: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  onClose: () => void;
  onConfirm?: () => void;
  confirmText?: string;
  cancelText?: string;
}

const AlertModal: React.FC<AlertModalProps> = ({
  open,
  title,
  message,
  type = "info",
  onClose,
  onConfirm,
  confirmText = "OK",
  cancelText = "Cancel",
}) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <SuccessIcon sx={{ color: "#4caf50", mr: 1 }} />;
      case "error":
        return <ErrorIcon sx={{ color: "#f44336", mr: 1 }} />;
      case "warning":
        return <WarningIcon sx={{ color: "#ff9800", mr: 1 }} />;
      case "info":
      default:
        return <InfoIcon sx={{ color: "#2196f3", mr: 1 }} />;
    }
  };

  const getTitleColor = () => {
    switch (type) {
      case "success":
        return "#4caf50";
      case "error":
        return "#f44336";
      case "warning":
        return "#ff9800";
      case "info":
      default:
        return "#2196f3";
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          fontWeight: 600,
          color: getTitleColor(),
        }}
      >
        {getIcon()}
        {title}
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {message}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ p: 2, gap: 1 }}>
        {onConfirm && (
          <Button onClick={onClose} variant="outlined">
            {cancelText}
          </Button>
        )}
        <Button
          onClick={() => {
            if (onConfirm) {
              onConfirm();
            }
            onClose();
          }}
          variant="contained"
          autoFocus
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertModal;
