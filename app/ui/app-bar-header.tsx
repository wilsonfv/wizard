import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import AppBarMenuName from "@/app/ui/app-bar-menu-name";
import AppBarMenuButton from "@/app/ui/app-bar-menu-button";
import { Stack } from "@mui/material";
import AuthSection from "@/app/ui/auth-section";

export default function AppBarHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <AppBarMenuButton />
          <AppBarMenuName />
          <Stack sx={{ marginLeft: "auto" }}>
            <AuthSection />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
