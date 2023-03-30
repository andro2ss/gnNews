import React from "react";
import styled from "styled-components";
import { Article } from "../hook/useCountryNewsPage";
import { ArticleTileItem } from "../../../components/ArticleTileItem/ArticleTileItem";

interface ITilesView {
  articleList?: Article[];
  onArticleSelect?: (article?: Article) => void;
}

export const TilesView = ({ articleList, onArticleSelect }: ITilesView) => {
  return (
    <StyledArticleList>
      {articleList &&
        articleList?.length > 0 &&
        articleList.map((article) => {
          const formattedDate = new Date(
            article.publishedAt as string
          ).toLocaleString();

          return (
            <ArticleTileItem
              key={article.title?.replace(" ", "")}
              title={article.title as string}
              source={article.source.name as string}
              date={formattedDate}
              description={article.description as string}
              image={article.urlToImage as string}
              onClick={() => onArticleSelect && onArticleSelect(article)}
            />
          );
        })}
    </StyledArticleList>
  );
};

const StyledArticleList = styled.div`
  margin: 1rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: stretch;
  justify-content: center;
`;
