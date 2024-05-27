import { Container, Typography, Stack } from "@mui/material";
import { Start } from "./Start";
import { useQuestionStore } from "./store/questions";
import { Game } from "./Game";

function App() {
  const questions = useQuestionStore((state) => state.questions);

  console.log(questions);
  return (
    <main className="min-h-screen text-white flex items-center justify-center with-background">
      <div className="background-image"></div>
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          zIndex: "1",
        }}
      >
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: "#a27854",
              fontFamily: "thrones",
              textAlign: "center",
              lineHeight: 1.5,
              "@media (max-width:720px)": {
                fontSize: "2rem",
              },
            }}
          >
            Game of Thrones Quiz
          </Typography>
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && <Game />}
      </Container>
    </main>
  );
}

export default App;
