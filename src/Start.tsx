import { Button } from "@mui/material";
import { useQuestionStore } from "./store/questions";

const LIMIT_QUESTIONS = 10;

export const Start = () => {
  const fetchQuestions = useQuestionStore((state) => state.fetchQuestions);

  const handleClick = () => {
    fetchQuestions(LIMIT_QUESTIONS);
  };
  return (
    <Button
      onClick={handleClick}
      variant="outlined"
      sx={{
        marginTop: "20px",
        border: "1px solid #a27854",
        borderColor: "#a27854",
        backgroundColor: "#a27854",
        color: "white",
        "&:hover": {
          backgroundColor: "transparent",
          borderColor: "#a27854",
          color: "#a27854",
        },
      }}
    >
      ¡Empezar
    </Button>
  );
};
