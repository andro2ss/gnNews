import React, { ReactNode } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import styled from "styled-components";

interface IHeader {
  id?: string;
  handleIconButtonOnClick: () => void;
  content?: ReactNode;
}

export const Header = ({ handleIconButtonOnClick, content, id }: IHeader) => {
  return (
    <StyledHeader>
      <AppBar position="fixed" className="section-header" id={id}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleIconButtonOnClick}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        {content}
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
