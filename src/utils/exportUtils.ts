/**
 * Utility functions for exporting content in various formats
 * Note: Export functionality has been moved to exportServices/sessionPlanExport.ts
 * This file is deprecated and will be removed in future versions
 */

// Re-export functions from the new export service for backward compatibility
export {
  copyToClipboard,
  downloadAsPDF,
  printElementAsPDF,
  sanitizeFilename,
  htmlToText,
} from "../services/exportServices/sessionPlanExport";
