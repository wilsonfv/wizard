"use client";

import React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { User } from "@auth/core/types";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import { Button, ListItemAvatar } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { signOut } from "next-auth/react";

export default function AccountMenu({ user }: { user: User }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const shortenEmail = (email: string | null | undefined) => {
    if (email) {
      return email.split("@")[0];
    } else {
      return "undefined";
    }
  };

  return (
    <React.Fragment>
      <Tooltip title="Account Details">
        <Button
          color="inherit"
          startIcon={<GoogleIcon />}
          onClick={handleClick}
          size="small"
          sx={{ margin: 0, padding: 0, textTransform: "none" }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          {shortenEmail(user.email)}
        </Button>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <GoogleIcon />
            </ListItemIcon>
            <ListItemText>Google Account Details</ListItemText>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt={user.name?.toString()}
                src={user.image?.toString()}
              />
            </ListItemAvatar>
            <ListItemText>{user.name}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText>{user.email}</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <MenuItem onClick={() => signOut()}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sign-out
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
