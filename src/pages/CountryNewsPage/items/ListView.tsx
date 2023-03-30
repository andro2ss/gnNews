import React from "react";
import { ArticleListItem } from "../../../components/ArticleListItem/ArticleListItem";
import styled from "styled-components";
import { Article } from "../hook/useCountryNewsPage";

interface IListView {
  articleList?: Article[];
  onArticleSelect?: (article?: Article) => void;
}

export const ListView = ({ articleList, onArticleSelect }: IListView) => {
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
              onClick={() => onArticleSelect && onArticleSelect(article)}
            />
          );
        })}
    </StyledArticleList>
  );
};

const StyledArticleList = styled.ol`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
