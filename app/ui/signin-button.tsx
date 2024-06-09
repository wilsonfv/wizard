import { signIn } from "@/auth";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import GoogleIcon from "@mui/icons-material/Google";
import GithubIcon from "@mui/icons-material/GitHub";
import React from "react";

export default function SignInButton({
  provider,
}: {
  provider: "Google" | "Github";
}) {
  const providerLowercase = provider.toLowerCase();

  return (
    <React.Fragment>
      <form
        action={async () => {
          "use server";
          await signIn(providerLowercase);
        }}
      >
        <Tooltip title={`Sign in with ${provider} account`}>
          <Button
            color="inherit"
            type="submit"
            startIcon={provider === "Google" ? <GoogleIcon /> : <GithubIcon />}
            size="small"
            sx={{
              margin: 0,
              padding: 0,
            }}
          >
            Sign In
          </Button>
        </Tooltip>
      </form>
    </React.Fragment>
  );
}
