import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs, Button, IconButton } from "@mui/material";
import { useHeaderContent } from "./useHeaderContent";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Modal } from "../../../components/Modal/Modal";
import { useTranslation } from "react-i18next";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

export const HeaderContent = () => {
  const {
    handleHomeBtnClick,
    format,
    handleFormatChange,
    showModal,
    toggleModal,
  } = useHeaderContent();
  const { t } = useTranslation(["common"]);

  return (
    <StyledHeaderItems>
      <Breadcrumbs aria-label="breadcrumb">
        <Button startIcon={<HomeIcon />} onClick={handleHomeBtnClick}>
          gnNews
        </Button>
        <Button onClick={handleFormatChange}>
          {format === "list" ? t("list") : t("tiles")}
        </Button>
        <IconButton onClick={toggleModal}>
          <MoreHorizIcon />
        </IconButton>
        <LanguageSelect />
      </Breadcrumbs>
      <Modal showModal={showModal} onClose={toggleModal}>
        <StyledMessage>
          <h3>{t("challenges.difficulties_title")}</h3>{" "}
          <p>{t("challenges.difficulties_text1")}</p>
          <h3>{t("challenges.coolStuff_title")}</h3>
          <p>{t("challenges.coolStuff_text1")}</p>
          <p>{t("challenges.coolStuff_text2")}</p>
          <p>{t("challenges.coolStuff_text3")}</p>
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
