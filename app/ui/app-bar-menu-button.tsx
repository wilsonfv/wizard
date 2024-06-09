"use client";

import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawer from "@/app/ui/menu-drawer";

export default function AppBarMenuButton() {
  const [menuDrawerOpen, setMenuDrawerOpen] = React.useState(false);

  const toggleDrawer =
    (shallOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setMenuDrawerOpen(shallOpen);
    };

  return (
    <div>
      <React.Fragment>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <MenuDrawer
          menuDrawerOpen={menuDrawerOpen}
          toggleDrawer={toggleDrawer}
        />
      </React.Fragment>
    </div>
  );
}
