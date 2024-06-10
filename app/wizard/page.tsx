import { Alert, Paper, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { auth } from "@/auth";
import Divider from "@mui/material/Divider";
import SignInButton from "@/app/ui/signin-button";

export default async function Page() {
  const session = await auth();

  return (
    <Stack spacing={2}>
      <Typography variant="subtitle2" gutterBottom>
        Wizard can help you enable GCP products.
      </Typography>
      {!session?.user && (
        <Alert severity="info">
          <Stack direction="row" spacing={2}>
            <Typography>
              You MUST signin with Google account to continue.
            </Typography>
            <SignInButton provider="Google" />
          </Stack>
        </Alert>
      )}

      <Divider />

      <Typography variant="subtitle2" gutterBottom>
        {JSON.stringify(session)}
      </Typography>
    </Stack>
  );
}
