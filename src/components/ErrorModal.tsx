import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { Error as ErrorIcon, Close } from "@mui/icons-material";

interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  open,
  onClose,
  title = "Error",
  message = "Something failed, please try again. If the same problem occurs, please contact administrator.",
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          p: 1,
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pb: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ErrorIcon color="error" />
          <Typography variant="h6" component="span">
            {title}
          </Typography>
        </Box>
        <IconButton onClick={onClose} size="small" sx={{ color: "grey.500" }}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pb: 3 }}>
        <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
          {message}
        </Typography>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button
          onClick={onClose}
          variant="contained"
          fullWidth
          sx={{
            py: 1.5,
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            "&:hover": {
              background: "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
            },
          }}
        >
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ErrorModal;
