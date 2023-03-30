import React from "react";
import styled from "styled-components";
import { CardActionArea } from "@mui/material";

interface IArticleListItem {
  title?: string;
  source?: string;
  date?: string;
  onClick?: () => void;
}

export const ArticleListItem = ({
  title,
  source,
  date,
  onClick,
}: IArticleListItem) => {
  return (
    <StyledArticleListItem>
      <CardActionArea onClick={onClick}>
        <h4>{title}</h4>
        <div>
          <span>Źródło: {source}</span>
          <span>{date}</span>
        </div>
      </CardActionArea>
    </StyledArticleListItem>
  );
};

const StyledArticleListItem = styled.li`
  h4 {
    margin: 0 0 4px 0;
    padding: 0;
    font-size: 1rem;
  }

  div {
    display: flex;
    font-size: 0.8rem;
    color: grey;
    justify-content: space-between;
  }
`;
