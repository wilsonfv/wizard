"use client";

import { signIn } from "next-auth/react";
import { Button } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import GoogleIcon from "@mui/icons-material/Google";
import GithubIcon from "@mui/icons-material/GitHub";

export function SignInButton({ provider }: { provider: "Google" | "Github" }) {
  return (
    <Tooltip title={`Sign in with ${provider} account`}>
      <Button
        color="inherit"
        onClick={() => signIn()}
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
  );
}
