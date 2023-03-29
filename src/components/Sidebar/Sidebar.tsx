import React, { ReactNode } from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { EmptySpace } from "../EmptySpace/EmptySpace";
import { useDevice } from "../../hooks/useDevice";

interface ISidebar {
  navigationWidth: number;
  container: (() => HTMLElement) | undefined;
  mobileOpen: boolean;
  handleSidebarToggle: () => void;
  content?: ReactNode;
  topFreeSpace?: number;
}

export const Sidebar = ({
  navigationWidth,
  container,
  mobileOpen,
  handleSidebarToggle,
  content,
  topFreeSpace,
}: ISidebar) => {
  const { isMobile } = useDevice();

  return (
    <>
      <Box
        component="nav"
        sx={{ width: { sm: navigationWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={isMobile ? container : undefined}
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={isMobile ? handleSidebarToggle : undefined}
          ModalProps={
            isMobile
              ? {
                  keepMounted: true,
                }
              : undefined
          }
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: navigationWidth,
            },
          }}
        >
          <EmptySpace heightSpace={topFreeSpace} />
          {content}
        </Drawer>
      </Box>
    </>
  );
};
