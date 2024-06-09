import { Alert, Paper, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          // height: 240,
        }}
      >
        <Typography variant="subtitle2" gutterBottom>
          Wizard can help you enable GCP products.
        </Typography>
        {!session?.user && (
          <Alert severity="info">
            You MUST signin with Google account to continue.
          </Alert>
        )}
      </Paper>
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          height: 240,
        }}
      >
        Select GCP Product ID
      </Paper>
    </Stack>
  );
}
