import React from "react";
import { Button } from "@mui/material";
import { Article } from "../hook/useCountryNewsPage";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

interface IArticleDetails {
  article: Article;
}

export const ArticleDetails = ({ article }: IArticleDetails) => {
  const { t } = useTranslation(["common"]);

  return (
    <ArticleBox>
      {article?.author && (
        <div className={"box box-author"}>
          <h4>{t("author")}</h4>
          <span>{article.author}</span>
        </div>
      )}
      {article?.content && (
        <div className={"box box-content"}>
          <h4>{t("content")}</h4>
          <span>{article.content}</span>
        </div>
      )}
      {article?.url && (
        <>
          <div className={"box box-url"}>
            <h4>{t("source_address")}</h4>
            <span>{article.url}</span>
          </div>
          <div className={"box box-button"}>
            <Button onClick={() => article?.url && window.open(article?.url)}>
              {t("goTo_article")}
            </Button>
          </div>
        </>
      )}
      {!article?.url && !article?.content && !article?.author && (
        <h3>{t("empty_msg")}</h3>
      )}
    </ArticleBox>
  );
};

const ArticleBox = styled.div`
  max-width: 80vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  max-height: calc(100vh - 200px);

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0.25rem;

    h4 {
      padding: 0;
      margin: 0;
      white-space: nowrap;
    }

    span {
      display: inline-block;
      max-width: 100%;
      overflow: hidden;
      font-size: 0.9rem;
      overflow-wrap: break-word;
    }

    &-author {
      span {
        font-weight: 500;
        font-size: 1.2rem;
      }
    }

    &-url {
      span {
        font-size: 0.8rem;
      }
    }

    &-button {
      width: 100%;

      button {
        margin-left: auto;
      }
    }
  }
`;
