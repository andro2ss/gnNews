import React, { ReactNode } from "react";
import styled from "styled-components";

interface IFooter {
  id?: string;
  content?: ReactNode;
}

export const Footer = ({ id, content }: IFooter) => {
  return <FooterBox id={id}>{content}</FooterBox>;
};

const FooterBox = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #1976d2;
  z-index: 2000;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
`;
