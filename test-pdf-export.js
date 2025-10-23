/**
 * Test file for PDF export functionality
 * This is a simple test to verify PDF export works correctly
 */

import { downloadAsPDF } from "./src/services/exportServices/sessionPlanExport";

// Test HTML content
const testContent = `
<div class="header">
    <h1>Test Session Plan</h1>
    <p><strong>Duration:</strong> 45 minutes</p>
</div>

<div class="section">
    <h2>Introduction</h2>
    <p>This is a test session plan to verify PDF export functionality.</p>
</div>

<div class="section">
    <h2>Main Content</h2>
    <h3>Key Concepts</h3>
    <ul>
        <li>Test concept 1</li>
        <li>Test concept 2</li>
        <li>Test concept 3</li>
    </ul>
</div>

<div class="note">
    <strong>Note:</strong> This is a test document for PDF export functionality.
</div>
`;

// Function to test PDF export (to be called in browser console)
window.testPDFExport = () => {
  downloadAsPDF(testContent, "test_session_plan", "Test Session Plan");
  console.log("PDF export test initiated. Check for popup/download.");
};
