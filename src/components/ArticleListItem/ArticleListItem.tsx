import React from "react";
import styled from "styled-components";

interface IArticleListItem {
  title?: string;
  source?: string;
  date?: string;
}

export const ArticleListItem = ({ title, source, date }: IArticleListItem) => {
  return (
    <StyledArticleListItem>
      <h4>{title}</h4>
      <div>
        <span>Źródło: {source}</span>
        <span>{date}</span>
      </div>
    </StyledArticleListItem>
  );
};

const StyledArticleListItem = styled.li`
  h4 {
    margin: 0;
    padding: 0;
  }
  div {
    display: flex;
    font-size: 0.8rem;
    color: grey;
    justify-content: space-between;
  }
`;
