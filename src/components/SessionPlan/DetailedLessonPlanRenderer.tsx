import { Box, Button, Paper, Typography } from "@mui/material";
import { SessionDetailContent } from "../../interfaces";

const DetailedLessonPlanRenderer = ({
  content,
}: {
  content: SessionDetailContent;
}) => {
  return (
    <Box sx={{ "& > *": { marginBottom: 3 } }}>
      {/* Session Header */}
      <Paper sx={{ padding: 2, backgroundColor: "#e3f2fd", borderRadius: 1 }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", marginBottom: 1 }}
        >
          {content.sessionTitle}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: 0.5 }}>
          Subject: {content.subject} | Class: {content.class}
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: 600, marginBottom: 1 }}>
          Duration: {content.duration}
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic" }}>
          {content.summary}
        </Typography>
      </Paper>

      {/* Objectives */}
      <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", marginBottom: 2 }}
        >
          Learning Objectives
        </Typography>
        <Box component="ol" sx={{ margin: 0, paddingLeft: 2.5 }}>
          {content.objectives.map((objective, index) => (
            <Typography
              key={index}
              component="li"
              variant="body2"
              sx={{ marginBottom: 0.5 }}
            >
              {objective}
            </Typography>
          ))}
        </Box>
      </Paper>

      {/* Teaching Script */}
      <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", marginBottom: 2 }}
        >
          Teaching Script
        </Typography>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Overview:
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: "italic" }}>
            {content.teachingScript.overview}
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Step-by-Step Teaching:
          </Typography>
          {content.teachingScript.stepByStep.map((step, index) => (
            <Box
              key={index}
              sx={{
                marginBottom: 1.5,
                padding: 1,
                backgroundColor: "#f9f9f9",
                borderRadius: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{ fontWeight: 600, color: "primary.main" }}
              >
                {step.time}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 0.5 }}>
                <strong>Teacher:</strong> {step.teacherLines}
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontStyle: "italic", color: "#666" }}
              >
                <strong>Student Activity:</strong> {step.studentActivity}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Transitions:
          </Typography>
          <Typography variant="body2">
            {content.teachingScript.transitions}
          </Typography>
        </Box>
      </Paper>

      {/* Board Work Plan */}
      <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", marginBottom: 2 }}
        >
          Board Work Plan
        </Typography>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Definitions:
          </Typography>
          <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
            {content.boardWorkPlan.definitions.map((definition, index) => (
              <Typography
                key={index}
                component="li"
                variant="body2"
                sx={{ marginBottom: 0.5 }}
              >
                {definition}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Laws/Rules:
          </Typography>
          <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
            {content.boardWorkPlan.lawsOrRules.map((rule, index) => (
              <Typography
                key={index}
                component="li"
                variant="body2"
                sx={{ marginBottom: 0.5 }}
              >
                <strong>{rule.name}:</strong> {rule.statement} ({rule.notation})
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Diagrams to Draw:
          </Typography>
          <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
            {content.boardWorkPlan.diagramsToDraw.map((diagram, index) => (
              <Typography
                key={index}
                component="li"
                variant="body2"
                sx={{ marginBottom: 0.5 }}
              >
                <strong>{diagram.label}:</strong> {diagram.instructions}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Keywords:
          </Typography>
          <Typography variant="body2">
            {content.boardWorkPlan.keywords.join(", ")}
          </Typography>
        </Box>
      </Paper>

      {/* Detailed Explanations */}
      <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", marginBottom: 2 }}
        >
          Detailed Explanations
        </Typography>
        {content.detailedExplanations.subtopics.map((subtopic, index) => (
          <Box key={index} sx={{ marginBottom: 3 }}>
            <Typography
              variant="h6"
              sx={{
                color: "primary.main",
                marginBottom: 1,
                fontSize: "1.1rem",
              }}
            >
              {subtopic.title}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              {subtopic.explanation}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              <strong>Example:</strong> {subtopic.example}
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontStyle: "italic", color: "#666", marginBottom: 1 }}
            >
              <strong>Classroom Tips:</strong> {subtopic.classroomTips}
            </Typography>
            {subtopic.comparisonTable?.useIfRelevant && (
              <Box sx={{ marginTop: 1 }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "1px solid #ddd",
                  }}
                >
                  <thead>
                    <tr>
                      {subtopic.comparisonTable.headers.map((header, idx) => (
                        <th
                          key={idx}
                          style={{
                            padding: "8px",
                            backgroundColor: "#f0f0f0",
                            border: "1px solid #ddd",
                          }}
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {subtopic.comparisonTable.rows.map((row, rowIdx) => (
                      <tr key={rowIdx}>
                        {row.map((cell, cellIdx) => (
                          <td
                            key={cellIdx}
                            style={{
                              padding: "8px",
                              border: "1px solid #ddd",
                            }}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Box>
            )}
          </Box>
        ))}
      </Paper>

      {/* Activities */}
      <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", marginBottom: 2 }}
        >
          Activities
        </Typography>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Warm-up Hook:
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: "italic" }}>
            {content.activities.warmUpHook}
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Interactive Activities:
          </Typography>
          {content.activities.interactive.map((activity, index) => (
            <Box
              key={index}
              sx={{
                marginBottom: 1.5,
                padding: 1,
                backgroundColor: "#f9f9f9",
                borderRadius: 1,
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                {activity.name} ({activity.time})
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: 0.5 }}>
                {activity.expectedOutcome}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                <strong>Steps:</strong> {activity.steps.join(", ")}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Practice Problems:
          </Typography>
          <Box component="ol" sx={{ margin: 0, paddingLeft: 2.5 }}>
            {content.activities.practiceProblems.map((problem, index) => (
              <Typography
                key={index}
                component="li"
                variant="body2"
                sx={{ marginBottom: 0.5 }}
              >
                {problem.problem} <em>(Answer: {problem.answer})</em>
              </Typography>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Group Work:
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: 0.5 }}>
            <strong>Task:</strong> {content.activities.groupWork.task}
          </Typography>
          <Typography variant="body2">
            <strong>Success Criteria:</strong>{" "}
            {content.activities.groupWork.successCriteria}
          </Typography>
        </Box>
      </Paper>

      {/* Wrap-up */}
      <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", marginBottom: 2 }}
        >
          Wrap-up
        </Typography>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Summary:
          </Typography>
          <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
            {content.wrapUp.summary.map((point, index) => (
              <Typography
                key={index}
                component="li"
                variant="body2"
                sx={{ marginBottom: 0.5 }}
              >
                {point}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Engagement Questions:
          </Typography>
          <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
            {content.wrapUp.engagementQuestions.map((question, index) => (
              <Typography
                key={index}
                component="li"
                variant="body2"
                sx={{ marginBottom: 0.5 }}
              >
                {question}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Closure Activity:
          </Typography>
          <Typography variant="body2">
            {content.wrapUp.closureActivity}
          </Typography>
        </Box>
      </Paper>

      {/* Quick Assessment */}
      <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", marginBottom: 2 }}
        >
          Quick Assessment
        </Typography>

        <Box sx={{ marginBottom: 2 }}>
          <Box component="ol" sx={{ margin: 0, paddingLeft: 2.5 }}>
            {content.quickAssessment.fiveQandA.map((qa, index) => (
              <Box key={index} component="li" sx={{ marginBottom: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Q: {qa.q}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic", color: "#666" }}
                >
                  A: {qa.a}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Typography variant="body2" sx={{ fontStyle: "italic" }}>
          {content.quickAssessment.formatHints}
        </Typography>
      </Paper>

      {/* Assessment */}
      <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", marginBottom: 2 }}
        >
          Assessment
        </Typography>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Exit Ticket:
          </Typography>
          <Typography variant="body2">
            {content.assessment.exitTicket}
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Homework:
          </Typography>
          <Typography variant="body2">{content.assessment.homework}</Typography>
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Marking Hints:
          </Typography>
          <Typography variant="body2">
            {content.assessment.rubricOrMarkingHints}
          </Typography>
        </Box>
      </Paper>

      {/* Resources */}
      <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", marginBottom: 2 }}
        >
          Resources
        </Typography>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Materials:
          </Typography>
          <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
            {content.resources.materials.map((material, index) => (
              <Typography
                key={index}
                component="li"
                variant="body2"
                sx={{ marginBottom: 0.5 }}
              >
                {material}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            References:
          </Typography>
          <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
            {content.resources.references.map((reference, index) => (
              <Typography
                key={index}
                component="li"
                variant="body2"
                sx={{ marginBottom: 0.5 }}
              >
                {reference}
              </Typography>
            ))}
          </Box>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Additional Reading/Media:
          </Typography>
          <Box component="ul" sx={{ margin: 0, paddingLeft: 2.5 }}>
            {content.resources.additionalReadingOrMedia.map(
              (reading, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  sx={{ marginBottom: 0.5 }}
                >
                  {reading}
                </Typography>
              )
            )}
          </Box>
        </Box>

        {/* YouTube Videos Section */}
        {content.resources.youtubeVideos &&
          content.resources.youtubeVideos.success && (
            <Box>
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 600, marginBottom: 1 }}
              >
                Recommended YouTube Videos:
              </Typography>
              <Box sx={{ overflowX: "auto", marginBottom: 1 }}>
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    border: "1px solid #ddd",
                    fontSize: "0.875rem",
                  }}
                >
                  <thead>
                    <tr style={{ backgroundColor: "#f5f5f5" }}>
                      <th
                        style={{
                          padding: "12px 8px",
                          border: "1px solid #ddd",
                          textAlign: "left",
                          fontWeight: 600,
                          width: "60px",
                        }}
                      >
                        Thumbnail
                      </th>
                      <th
                        style={{
                          padding: "12px 8px",
                          border: "1px solid #ddd",
                          textAlign: "left",
                          fontWeight: 600,
                          minWidth: "200px",
                        }}
                      >
                        Title
                      </th>
                      <th
                        style={{
                          padding: "12px 8px",
                          border: "1px solid #ddd",
                          textAlign: "left",
                          fontWeight: 600,
                          width: "120px",
                        }}
                      >
                        Channel
                      </th>
                      <th
                        style={{
                          padding: "12px 8px",
                          border: "1px solid #ddd",
                          textAlign: "center",
                          fontWeight: 600,
                          width: "80px",
                        }}
                      >
                        Duration
                      </th>
                      <th
                        style={{
                          padding: "12px 8px",
                          border: "1px solid #ddd",
                          textAlign: "center",
                          fontWeight: 600,
                          width: "80px",
                        }}
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {content.resources.youtubeVideos.data.map(
                      (video, index) => (
                        <tr
                          key={index}
                          style={{
                            borderBottom: "1px solid #ddd",
                          }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.backgroundColor = "#f9f9f9")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              "transparent")
                          }
                        >
                          <td
                            style={{
                              padding: "8px",
                              border: "1px solid #ddd",
                              textAlign: "center",
                            }}
                          >
                            <img
                              src={video.thumbnailUrl}
                              alt={video.title}
                              style={{
                                width: "50px",
                                height: "38px",
                                objectFit: "cover",
                                borderRadius: "4px",
                              }}
                            />
                          </td>
                          <td
                            style={{
                              padding: "8px",
                              border: "1px solid #ddd",
                              maxWidth: "250px",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontWeight: 500,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                                lineHeight: 1.4,
                                marginBottom: 0.5,
                              }}
                              title={video.title}
                            >
                              {video.title}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "#666",
                                fontSize: "0.75rem",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: "vertical",
                              }}
                              title={video.description}
                            >
                              {video.description}
                            </Typography>
                          </td>
                          <td
                            style={{
                              padding: "8px",
                              border: "1px solid #ddd",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                fontSize: "0.8rem",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                              }}
                              title={video.channelTitle}
                            >
                              {video.channelTitle}
                            </Typography>
                          </td>
                          <td
                            style={{
                              padding: "8px",
                              border: "1px solid #ddd",
                              textAlign: "center",
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ fontSize: "0.8rem" }}
                            >
                              {video.duration}
                            </Typography>
                          </td>
                          <td
                            style={{
                              padding: "8px",
                              border: "1px solid #ddd",
                              textAlign: "center",
                            }}
                          >
                            <Button
                              size="small"
                              variant="outlined"
                              onClick={() =>
                                window.open(video.videoUrl, "_blank")
                              }
                              sx={{
                                fontSize: "0.7rem",
                                padding: "4px 8px",
                                minWidth: "auto",
                                textTransform: "none",
                              }}
                            >
                              Watch
                            </Button>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  color: "#666",
                  fontStyle: "italic",
                  display: "block",
                  marginTop: 1,
                }}
              >
                Found {content.resources.youtubeVideos.totalVideos} videos for
                keywords:{" "}
                {content.resources.youtubeVideos.keywordsSearched.join(", ")}
              </Typography>
            </Box>
          )}
      </Paper>

      {/* Differentiation */}
      <Paper sx={{ padding: 2, border: "1px solid #e0e0e0" }}>
        <Typography
          variant="h6"
          sx={{ color: "primary.main", marginBottom: 2 }}
        >
          Differentiation Strategies
        </Typography>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            For Struggling Learners:
          </Typography>
          <Typography variant="body2">
            {content.differentiation.strugglingLearners}
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            For Advanced Students:
          </Typography>
          <Typography variant="body2">
            {content.differentiation.advancedStudents}
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, marginBottom: 1 }}
          >
            Multiple Learning Styles:
          </Typography>
          <Typography variant="body2">
            {content.differentiation.multipleLearningStyles}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default DetailedLessonPlanRenderer;
