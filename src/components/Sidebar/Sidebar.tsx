import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

interface ISidebar {
  navigationWidth: number;
  container: (() => HTMLElement) | undefined;
  mobileOpen: boolean;
  handleSidebarToggle: () => void;
}

export const Sidebar = ({
  navigationWidth,
  container,
  mobileOpen,
  handleSidebarToggle,
}: ISidebar) => {
  const drawer = <div>bebechy drawer</div>;

  return (
    <Box
      component="nav"
      sx={{ width: { sm: navigationWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleSidebarToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: navigationWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: navigationWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};
