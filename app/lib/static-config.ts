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
