import Stack from "@mui/material/Stack";
import SignInButton from "@/app/ui/signin-button";
import { auth } from "@/auth";
import AccountMenu from "@/app/ui/account-menu";

export default async function AuthSection() {
  const session = await auth();

  console.log("auth-section : user " + session?.user);

  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        margin: 0,
        padding: 0,
      }}
    >
      {session?.user ? (
        <AccountMenu user={session?.user} />
      ) : (
        <SignInButton provider="Google" />
      )}
      <SignInButton provider="Github" />
    </Stack>
  );
}
