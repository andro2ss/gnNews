import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import styled from "styled-components";
import { HeaderItems } from "./items/HeaderItems";

interface IHeader {
  handleIconButtonOnClick: () => void;
}

export const Header = ({ handleIconButtonOnClick }: IHeader) => {
  return (
    <StyledHeader>
      <AppBar position="fixed" className="section-header">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleIconButtonOnClick}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <HeaderItems />
      </AppBar>
    </StyledHeader>
  );
};

export const StyledHeader = styled.div`
  .section-header {
    z-index: 2000;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5rem;
  }
`;
