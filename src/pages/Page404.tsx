import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const Page404 = () => {
  const navigate = useNavigate();
  return (
    <ErrorContainer>
      Page not found
      <Button variant="outlined" onClick={() => navigate("/")}>
        Return to Home
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
