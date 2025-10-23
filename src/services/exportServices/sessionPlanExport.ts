/**
 * Export service for session plans - handles PDF export and clipboard operations
 */

/**
 * Copies text content to clipboard
 * @param content - The text content to copy
 * @returns Promise that resolves when copy is successful
 */
export const copyToClipboard = async (content: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(content);
    return true;
  } catch (err) {
    console.error("Failed to copy to clipboard:", err);
    // Fallback for older browsers
    try {
      const textArea = document.createElement("textarea");
      textArea.value = content;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      const success = document.execCommand("copy");
      document.body.removeChild(textArea);
      return success;
    } catch (fallbackErr) {
      console.error("Fallback copy method failed:", fallbackErr);
      return false;
    }
  }
};

/**
 * Sanitizes filename by removing invalid characters
 * @param filename - The filename to sanitize
 * @returns Sanitized filename
 */
export const sanitizeFilename = (filename: string): string => {
  return filename
    .replace(/[^a-z0-9]/gi, "_")
    .toLowerCase()
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "");
};

/**
 * Converts HTML content to plain text
 * @param html - HTML content to convert
 * @returns Plain text content
 */
export const htmlToText = (html: string): string => {
  return html
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ") // Replace multiple whitespace with single space
    .trim();
};

/**
 * Generates and downloads a PDF using browser's print functionality
 * @param htmlContent - The HTML content to convert to PDF
 * @param filename - The filename (without extension)
 * @param title - The title for the document
 */
export const downloadAsPDF = (
  htmlContent: string,
  filename: string,
  title?: string
): void => {
  // Create a new window for printing
  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    alert("Please allow popups to download PDF");
    return;
  }

  // Enhanced PDF-optimized HTML
  const fullHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title || filename}</title>
    <style>
        @page {
            size: A4;
            margin: 0.5in;
        }
        
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
            line-height: 1.4; 
            color: #333; 
            max-width: 100%;
            margin: 0;
            padding: 20px;
            font-size: 12px;
        }
        
        h1, h2, h3, h4, h5, h6 { 
            color: #1976d2; 
            page-break-after: avoid;
            margin-top: 16px;
            margin-bottom: 8px;
        }
        
        h1 { font-size: 20px; }
        h2 { font-size: 18px; }
        h3 { font-size: 16px; }
        h4 { font-size: 14px; }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            page-break-inside: avoid;
        }
        
        .section {
            margin-bottom: 20px;
            padding: 15px;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            page-break-inside: avoid;
        }
        
        .section h2 {
            color: #1976d2;
            margin-top: 0;
            border-bottom: 2px solid #e3f2fd;
            padding-bottom: 8px;
        }
        
        ul, ol {
            padding-left: 20px;
            margin: 8px 0;
        }
        
        li {
            margin-bottom: 4px;
            line-height: 1.3;
        }
        
        .formula {
            background-color: #f5f5f5;
            padding: 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            margin: 4px 0;
            font-size: 11px;
        }
        
        .note {
            background-color: #e3f2fd;
            padding: 12px;
            border-radius: 8px;
            margin-top: 20px;
            font-style: italic;
            page-break-inside: avoid;
        }
        
        p {
            margin: 8px 0;
            line-height: 1.4;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 10px 0;
        }
        
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            font-size: 11px;
        }
        
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        
        @media print {
            body {
                margin: 0;
                padding: 10px;
                font-size: 11px;
            }
            
            .header {
                background: #667eea !important;
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
            }
            
            .section {
                border: 1px solid #ccc !important;
                page-break-inside: avoid;
            }
            
            .note {
                background-color: #f0f0f0 !important;
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
            }
        }
    </style>
</head>
<body>
    ${htmlContent}
    <script>
        window.onload = function() {
            // Auto-print when page loads
            setTimeout(() => {
                window.print();
                // Close window after printing
                setTimeout(() => {
                    window.close();
                }, 1000);
            }, 500);
        };
    </script>
</body>
</html>`;

  // Write content to new window
  printWindow.document.write(fullHTML);
  printWindow.document.close();
};

/**
 * Creates a print-optimized version of content and opens print dialog
 * @param element - The DOM element to print
 * @param filename - Optional filename for the PDF
 */
export const printElementAsPDF = (
  element: HTMLElement,
  filename?: string
): void => {
  const printWindow = window.open("", "_blank");

  if (!printWindow) {
    alert("Please allow popups to print/download PDF");
    return;
  }

  // Clone the element to avoid modifying the original
  const clonedElement = element.cloneNode(true) as HTMLElement;

  // Get computed styles from the original page
  const styles = Array.from(document.styleSheets)
    .map((styleSheet) => {
      try {
        return Array.from(styleSheet.cssRules)
          .map((rule) => rule.cssText)
          .join("");
      } catch (e) {
        console.log("Cannot access stylesheet");
        return "";
      }
    })
    .join("");

  const printHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${filename || "Session Plan"}</title>
    <style>
        ${styles}
        
        @page {
            size: A4;
            margin: 0.5in;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.4;
            color: #333;
            font-size: 12px;
        }
        
        @media print {
            body { margin: 0; padding: 10px; }
            .MuiModal-root { display: none !important; }
            .no-print { display: none !important; }
        }
    </style>
</head>
<body>
    ${clonedElement.outerHTML}
    <script>
        window.onload = function() {
            setTimeout(() => {
                window.print();
                setTimeout(() => window.close(), 1000);
            }, 500);
        };
    </script>
</body>
</html>`;

  printWindow.document.write(printHTML);
  printWindow.document.close();
};
