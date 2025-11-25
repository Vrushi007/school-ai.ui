import React from "react";
import { BlockMath, InlineMath } from "react-katex";

function RenderAIResponse({ content }: { content: string }) {
  // First, split by block math delimiters \[ ... \]
  const blockParts = content.split(/\\\[([\s\S]*?)\\\]/g);

  return (
    <>
      {blockParts.map((part, blockIndex) => {
        // Odd indices are LaTeX blocks
        if (blockIndex % 2 === 1) {
          return <BlockMath key={blockIndex} math={part.trim()} />;
        }

        // Even indices are regular text - process line by line
        const lines = part.split("\n");
        return (
          <React.Fragment key={blockIndex}>
            {lines.map((line, lineIndex) => {
              // Skip empty lines
              if (!line.trim()) {
                return <br key={`${blockIndex}-${lineIndex}`} />;
              }

              // Check for headers
              if (line.startsWith("### ")) {
                return (
                  <h3 key={`${blockIndex}-${lineIndex}`}>
                    {processInlineMath(line.substring(4))}
                  </h3>
                );
              }
              if (line.startsWith("## ")) {
                return (
                  <h2 key={`${blockIndex}-${lineIndex}`}>
                    {processInlineMath(line.substring(3))}
                  </h2>
                );
              }
              if (line.startsWith("# ")) {
                return (
                  <h1 key={`${blockIndex}-${lineIndex}`}>
                    {processInlineMath(line.substring(2))}
                  </h1>
                );
              }

              // Check for list items
              if (line.match(/^\s*[-*]\s+/)) {
                return (
                  <li
                    key={`${blockIndex}-${lineIndex}`}
                    style={{ marginLeft: "2rem" }}
                  >
                    {processInlineMath(line.replace(/^\s*[-*]\s+/, ""))}
                  </li>
                );
              }

              if (line.match(/^\s*\d+\.\s+/)) {
                return (
                  <li
                    key={`${blockIndex}-${lineIndex}`}
                    style={{ marginLeft: "2rem" }}
                  >
                    {processInlineMath(line.replace(/^\s*\d+\.\s+/, ""))}
                  </li>
                );
              }

              // Regular paragraph with inline math support
              return (
                <p key={`${blockIndex}-${lineIndex}`}>
                  {processInlineMath(line)}
                </p>
              );
            })}
          </React.Fragment>
        );
      })}
    </>
  );
}

// Helper function to process inline math \( ... \) and bold text
function processInlineMath(text: string): React.ReactNode[] {
  const parts = text.split(/\\\(([\s\S]*?)\\\)/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      // Odd indices are inline math
      return <InlineMath key={index} math={part.trim()} />;
    }
    // Even indices are regular text - process bold formatting
    return processBoldText(part, index);
  });
}

// Helper function to process bold text ** ... ** or __ ... __
function processBoldText(text: string, baseIndex: number): React.ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*|__.*?__)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${baseIndex}-${index}`}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("__") && part.endsWith("__")) {
      return <strong key={`${baseIndex}-${index}`}>{part.slice(2, -2)}</strong>;
    }
    return <span key={`${baseIndex}-${index}`}>{part}</span>;
  });
}

export default RenderAIResponse;
