import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { Box, Breadcrumbs, Button, IconButton, Modal } from "@mui/material";
import { useHeaderItems } from "../useHeaderItems";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const HeaderItems = () => {
  const {
    handleHomeBtnClick,
    format,
    handleFormatChange,
    showModal,
    toggleModal,
  } = useHeaderItems();

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

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
      <Modal
        open={showModal}
        onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledMessage>
            <h3>Największa trudność:</h3>{" "}
            <p>Instalowanie wszystkich node modules</p>
            <h3>Największa frajda</h3>
            <p>sprawdzenie z czym się je vite</p>
            <p>uzasadnione gruntowanie podstaw</p>
            <p>potencjalna szansa na lepszą przyszłość :)</p>
          </StyledMessage>
        </Box>
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
