import { Button } from "@mui/material";
import { useQuestionData } from "./hooks/useQuestionsData";
import { useQuestionStore } from "./store/questions";

export const Footer = () => {
  const { correct, incorrect, unanswered } = useQuestionData();
  const reset = useQuestionStore((state) => state.reset);
  return (
    <footer style={{ marginTop: "16px" }}>
      <strong>{`✅ ${correct} correctas - ❌ ${incorrect} incorrectas - ❓ ${unanswered}  sin responder`}</strong>
      <div style={{ marginTop: "16px", textAlign: "center" }}>
        <Button onClick={() => reset()} sx={{ color: "#af8960" }}>
          Resetear juego
        </Button>
      </div>
    </footer>
  );
};
