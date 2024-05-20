import { Container, Typography, Stack } from "@mui/material";
import { Start } from "./Start";

function App() {
  return (
    <main className="min-h-screen bg-gray-800 text-white">
      <Container
        maxWidth="sm"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          gap={2}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h3" component="h1">
            Quiz Harry Potter
          </Typography>
        </Stack>

        <Start />
      </Container>
    </main>
  );
}

export default App;
