import NextAuth from "next-auth";
import "next-auth/jwt";
import Google from "next-auth/providers/google";
import GitHub from "@auth/core/providers/github";
import {
  githubOAuthScopeList,
  googleOAuthScopeList,
} from "@/app/lib/static-config";
import { getSession } from "next-auth/react";

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      authorization: {
        params: {
          scope: googleOAuthScopeList,
        },
      },
    }),
    GitHub({
      authorization: {
        params: {
          scope: githubOAuthScopeList,
        },
      },
    }),
  ],
  callbacks: {
    jwt({ account, token, trigger }) {
      console.log("auth.ts : jwt : account : " + JSON.stringify(account));
      console.log("auth.ts : jwt : token : " + JSON.stringify(token));
      console.log("auth.ts : jwt : trigger : " + JSON.stringify(trigger));

      if (account?.provider === "google" && account?.access_token) {
        return { ...token, accessToken: account.access_token };
      }

      return token;
    },
    session({ session, token }) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
});
