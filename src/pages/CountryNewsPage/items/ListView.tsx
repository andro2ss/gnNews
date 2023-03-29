import React from "react";
import { ArticleListItem } from "../../../components/ArticleListItem/ArticleListItem";
import styled from "styled-components";
import { Article } from "../hook/useCountryNewsPage";

interface IListView {
  articleList?: Article[];
}

export const ListView = ({ articleList }: IListView) => {
  return (
    <StyledArticleList>
      {articleList &&
        articleList?.length > 0 &&
        articleList.map((article) => {
          const formattedDate = new Date(
            article.publishedAt as string
          ).toLocaleString();

          return (
            <ArticleListItem
              key={article.title?.replace(" ", "")}
              title={article.title as string}
              source={article.source.name as string}
              date={formattedDate}
            />
          );
        })}
    </StyledArticleList>
  );
};

const StyledArticleList = styled.ol`
  margin: 1rem 2rem 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
