import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { IMainLayout, useMainLayout } from "./useMainLayout";
import styled from "styled-components";
import { EmptySpace } from "../../components/EmptySpace/EmptySpace";
import React from "react";
import { useDevice } from "../../hooks/useDevice";

export const MainLayout = (props: IMainLayout) => {
  const {
    handleSidebarToggle,
    navigationWidth,
    container,
    mobileOpen,
    headerHeight,
  } = useMainLayout(props);
  const { isMobile } = useDevice();

  return (
    <>
      <CssBaseline />
      <Header
        id={"mainLayout-header"}
        handleIconButtonOnClick={handleSidebarToggle}
        content={props.headerContent}
      />
      <Sidebar
        handleSidebarToggle={handleSidebarToggle}
        navigationWidth={navigationWidth}
        container={container}
        mobileOpen={mobileOpen}
        topFreeSpace={headerHeight}
        content={props.sidebarContent}
      />
      <ContentBox>
        {!isMobile && <EmptySpace widthSpace={navigationWidth} />}
        <div>
          <EmptySpace heightSpace={headerHeight} />
          <Outlet />
        </div>
      </ContentBox>
    </>
  );
};

const ContentBox = styled.div`
  display: flex;
`;
