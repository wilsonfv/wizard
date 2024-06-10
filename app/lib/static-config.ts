import HomeIcon from "@mui/icons-material/Home";
import WizardIcon from "@mui/icons-material/Assistant";
import { Menu } from "@/app/lib/definition";

export const menuList: Menu[] = [
  {
    name: "Overview",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "Wizard",
    href: "/wizard",
    icon: WizardIcon,
  },
];

// https://developers.google.com/identity/protocols/oauth2/scopes
export const googleOAuthScopeList: String = [
  "openid",
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/cloud-platform.read-only",
].join(" ");

// https://docs.github.com/en/enterprise-server@3.13/apps/oauth-apps/building-oauth-apps/scopes-for-oauth-apps
export const githubOAuthScopeList: String = [
  "read:user",
  "user:email",
  "repo",
].join(" ");
