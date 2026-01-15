import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  CircularProgress,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Close } from "@mui/icons-material";

interface EditModalProps {
  open: boolean;
  title: string;
  fields: Array<{
    name: string;
    label: string;
    type?: "text" | "number" | "checkbox" | "email";
    required?: boolean;
    multiline?: boolean;
    rows?: number;
  }>;
  initialData?: Record<string, any>;
  loading?: boolean;
  error?: string | null;
  onClose: () => void;
  onSubmit: (data: Record<string, any>) => Promise<void>;
}

const EditModal: React.FC<EditModalProps> = ({
  open,
  title,
  fields,
  initialData = {},
  loading = false,
  error = null,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    setFormData(initialData);
    setSubmitError(null);
  }, [initialData, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      setSubmitError(null);
      await onSubmit(formData);
      onClose();
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to submit");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 600 }}>{title}</DialogTitle>
      <DialogContent sx={{ pt: 2 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {submitError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {submitError}
          </Alert>
        )}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {fields.map((field) => {
            if (field.type === "checkbox") {
              return (
                <FormControlLabel
                  key={field.name}
                  control={
                    <Checkbox
                      name={field.name}
                      checked={formData[field.name] || false}
                      onChange={handleChange}
                    />
                  }
                  label={field.label}
                />
              );
            }

            return (
              <TextField
                key={field.name}
                name={field.name}
                label={field.label}
                type={field.type || "text"}
                value={formData[field.name] || ""}
                onChange={handleChange}
                required={field.required || false}
                fullWidth
                multiline={field.multiline || false}
                rows={field.rows || 1}
                disabled={submitting}
              />
            );
          })}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={submitting}>
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={submitting}
          sx={{ minWidth: 100 }}
        >
          {submitting ? <CircularProgress size={24} /> : "Save"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModal;
