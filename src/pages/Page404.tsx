import React from "react";
import styled from "styled-components";

export const Page404 = () => {
  return <ErrorContainer>Error 404</ErrorContainer>;
};

const ErrorContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 3rem;
`;
