import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { IMainLayout, useMainLayout } from "./useMainLayout";

export const MainLayout = (props: IMainLayout) => {
  const { handleSidebarToggle, navigationWidth, container, mobileOpen } =
    useMainLayout(props);

  return (
    <>
      <CssBaseline />
      <Header handleIconButtonOnClick={handleSidebarToggle} />
      <Sidebar
        handleSidebarToggle={handleSidebarToggle}
        navigationWidth={navigationWidth}
        container={container}
        mobileOpen={mobileOpen}
      />
      <Outlet />
    </>
  );
};
