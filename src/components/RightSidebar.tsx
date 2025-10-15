import React from "react";
import {
  Paper,
  Typography,
  Box,
  Chip,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Topic } from "../types";

interface RightSidebarProps {
  topics: Topic[];
  selectedTopicId: string | null;
  onTopicSelection: (topicId: string) => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({
  topics,
  selectedTopicId,
  onTopicSelection,
}) => {
  return (
    <Box sx={{ flex: "0 0 300px" }}>
      <Paper elevation={2} sx={{ p: 3, height: "fit-content" }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          Chapter Topics
        </Typography>

        {topics.length ? (
          <List dense>
            {topics.map((topic) => (
              <ListItem key={topic.id} disablePadding>
                <ListItemButton
                  selected={selectedTopicId === topic.id}
                  onClick={() => onTopicSelection(topic.id)}
                  sx={{
                    borderRadius: 1,
                    mb: 1,
                    "&.Mui-selected": {
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      "&:hover": {
                        background:
                          "linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)",
                      },
                    },
                  }}
                >
                  <Chip
                    label={topic.order}
                    size="small"
                    sx={{
                      mr: 1,
                      minWidth: "24px",
                      height: "24px",
                      fontSize: "0.75rem",
                      backgroundColor:
                        selectedTopicId === topic.id
                          ? "rgba(255,255,255,0.2)"
                          : "primary.main",
                      color: selectedTopicId === topic.id ? "white" : "white",
                    }}
                  />
                  <ListItemText
                    primary={topic.title}
                    primaryTypographyProps={{
                      fontSize: "0.9rem",
                      fontWeight: selectedTopicId === topic.id ? 600 : 400,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ) : (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              fontStyle="italic"
            >
              Select a chapter to view topics
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default RightSidebar;
