import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "@auth/core/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
  callbacks: {
    jwt({ account, profile, session, token, trigger, user }) {
      // console.log("jwt account " + account);
      // console.log("jwt profile " + profile);
      // console.log("jwt session " + session);
      // console.log("jwt token " + token);
      // console.log("jwt trigger " + trigger);
      // console.log("jwt user " + user);

      return token;
    },
  },
});
