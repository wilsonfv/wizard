"use client";

import { getSession } from "next-auth/react";
import Stack from "@mui/material/Stack";
import { SignInButton } from "@/app/ui/signin-button";

export function AuthSection() {
  const session = async () => {
    return await getSession();
  };

  console.log("auth-section.tsx : " + session);

  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        margin: 0,
        padding: 0,
      }}
    >
      <SignInButton provider="Google" />
      <SignInButton provider="Github" />
    </Stack>
  );
}
