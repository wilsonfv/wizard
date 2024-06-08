import { Alert, Container, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  if (!session?.user)
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="info">
          You MUST signin with Google account to continue.
        </Alert>
      </Stack>
    );

  return (
    <Container sx={{ flexGrow: 1 }}>
      <Typography paragraph>Wizard page</Typography>
    </Container>
  );
}
