"use client";

import Typography from "@mui/material/Typography";
import { usePathname } from "next/navigation";
import { Menu } from "@/app/lib/definition";
import { menuList } from "@/app/lib/static-config";

export default function AppBarMenuName() {
  function getAppBarMenuNameBy(pathname: string) {
    return menuList.filter((menu: Menu) => {
      return pathname === menu.href;
    })[0].name;
  }

  return (
    <Typography variant="h6" component="div">
      {getAppBarMenuNameBy(usePathname())}
    </Typography>
  );
}
