import React from "react";
import { Clock } from "../../../components/Clock/Clock";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const FooterContent = () => {
  const articleAmount = useSelector(
    (state: RootState) => state.listAmount.amount
  );
  const { t } = useTranslation(["common"]);

  return (
    <FooterContainer>
      <div />
      <div className={"article-counter"}>
        {t("article_amount")}
        <span className={"bold"}>{articleAmount}</span>
      </div>
      <Clock />
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
  width: 100%;

  .article-counter {
    display: flex;
    gap: 0.25rem;
  }
`;
