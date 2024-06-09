import Drawer from "@mui/material/Drawer";
import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Menu } from "@/app/lib/definition";
import { menuList } from "@/app/lib/static-config";

export default function MenuDrawer({
  menuDrawerOpen,
  toggleDrawer,
}: {
  menuDrawerOpen: boolean;
  toggleDrawer: Function;
}) {
  return (
    <Drawer anchor="left" open={menuDrawerOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {menuList.map((menu: Menu) => {
            const MenuIcon = menu.icon;
            return (
              <ListItem key={menu.name} disablePadding>
                <ListItemButton href={menu.href}>
                  <ListItemIcon>
                    <MenuIcon />
                  </ListItemIcon>
                  <ListItemText primary={menu.name} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
