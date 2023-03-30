import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs, Button, IconButton } from "@mui/material";
import { useHeaderContent } from "./useHeaderContent";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Modal } from "../../../components/Modal/Modal";

export const HeaderContent = () => {
  const {
    handleHomeBtnClick,
    format,
    handleFormatChange,
    showModal,
    toggleModal,
  } = useHeaderContent();

  return (
    <StyledHeaderItems>
      <Breadcrumbs aria-label="breadcrumb">
        <Button startIcon={<HomeIcon />} onClick={handleHomeBtnClick}>
          gnNews
        </Button>
        <Button onClick={handleFormatChange}>{format}</Button>
        <IconButton onClick={toggleModal}>
          <MoreHorizIcon />
        </IconButton>
      </Breadcrumbs>
      <Modal showModal={showModal} onClose={toggleModal}>
        <StyledMessage>
          <h3>Największa trudność:</h3>{" "}
          <p>Instalowanie wszystkich node modules</p>
          <h3>Największa frajda</h3>
          <p>sprawdzenie z czym się je vite</p>
          <p>uzasadnione gruntowanie podstaw</p>
          <p>potencjalna szansa na lepszą przyszłość :)</p>
        </StyledMessage>
      </Modal>
    </StyledHeaderItems>
  );
};

const StyledHeaderItems = styled.div`
  margin: 0 auto;

  button,
  button * {
    color: white;
    text-transform: none;
  }
`;

const StyledMessage = styled.div`
  text-align: center;
  min-width: 15rem;
`;
