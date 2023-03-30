import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Page404 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(["common"]);

  return (
    <ErrorContainer>
      {t("page_not_found")}
      <Button variant="outlined" onClick={() => navigate("/")}>
        {t("back_home")}
      </Button>
    </ErrorContainer>
  );
};

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-size: 3rem;
`;
