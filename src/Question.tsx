import {
  Card,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { type Question as QuestionType } from "./types";
import { useQuestionStore } from "./store/questions";

const getBackgroundColor = (info: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = info;
  //usuario no hay seleccionado nada todavía
  if (userSelectedAnswer == null) return "transparent";
  //Si ya selecciono pero la solución es incorrecta
  if (index !== correctAnswer && index !== userSelectedAnswer)
    return "transparent";
  if (index === correctAnswer) return "green";
  if (index === userSelectedAnswer) return "red";

  return "transparent";
};

export const Question = ({ info }: { info: QuestionType }) => {
  const selectAnswer = useQuestionStore((state) => state.selectAnswer);

  const createHandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: "#222",
        p: 2,
        textAlign: "left",
        color: "#fff",
        marginTop: 4,
        minWidth: "600px",
        "@media (max-width:720px)": {
          width: "90%",
          minWidth: "auto",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "1.2rem",
          textAlign: "center",
          marginBottom: "10px",
          color: "#bea27d",
        }}
      >
        {info.question}
      </Typography>

      <List sx={{ bgcolor: "#333" }} disablePadding>
        {info.answers.map((answer, index) => (
          <ListItem key={index} disablePadding divider>
            <ListItemButton
              disabled={info.userSelectedAnswer != null}
              onClick={createHandleClick(index)}
              sx={{ backgroundColor: getBackgroundColor(info, index) }}
            >
              <ListItemText primary={answer} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};
