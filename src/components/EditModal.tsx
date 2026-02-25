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
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";

interface EditModalProps {
  open: boolean;
  title: string;
  fields: Array<{
    name: string;
    label: string;
    type?: "text" | "number" | "checkbox" | "email" | "select";
    required?: boolean;
    multiline?: boolean;
    rows?: number;
    options?: Array<{ value: any; label: string }>;
    fetchOptions?: () => Promise<Array<{ value: any; label: string }>>;
  }>;
  initialData?: Record<string, any>;
  loading?: boolean;
  error?: string | null;
  disabledFields?: string[];
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
  disabledFields = [],
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<Record<string, any>>(initialData);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectOptions, setSelectOptions] = useState<Record<string, Array<{ value: any; label: string }>>>({});

  useEffect(() => {
    setFormData(initialData);
    setSubmitError(null);
    
    // Fetch options for select fields
    const loadSelectOptions = async () => {
      const optionsMap: Record<string, Array<{ value: any; label: string }>> = {};
      for (const field of fields) {
        if (field.type === "select") {
          if (field.options) {
            optionsMap[field.name] = field.options;
          } else if (field.fetchOptions) {
            try {
              optionsMap[field.name] = await field.fetchOptions();
            } catch (err) {
              console.error(`Failed to fetch options for ${field.name}:`, err);
              optionsMap[field.name] = [];
            }
          }
        }
      }
      setSelectOptions(optionsMap);
    };
    
    if (open) {
      loadSelectOptions();
    }
  }, [initialData, open, fields]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
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

            if (field.type === "select") {
              return (
                <FormControl
                  key={field.name}
                  fullWidth
                  required={field.required || false}
                  disabled={submitting || disabledFields.includes(field.name)}
                >
                  <InputLabel>{field.label}</InputLabel>
                  <Select
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    label={field.label}
                  >
                    {(selectOptions[field.name] || []).map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {disabledFields.includes(field.name) && (
                    <FormHelperText>Auto-populated from parent</FormHelperText>
                  )}
                </FormControl>
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
                disabled={submitting || disabledFields.includes(field.name)}
                helperText={
                  disabledFields.includes(field.name)
                    ? "Auto-populated from parent"
                    : undefined
                }
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
