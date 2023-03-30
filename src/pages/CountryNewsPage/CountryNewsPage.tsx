import React from "react";
import { useCountryNewsPage } from "./hook/useCountryNewsPage";
import { ListView } from "./items/ListView";
import { TilesView } from "./items/TilesView";
import { Container } from "@mui/material";
import { Modal } from "../../components/Modal/Modal";
import { ArticleDetails } from "./items/ArticleDetails";

export const CountryNewsPage = () => {
  const {
    articleList,
    articleFormat,
    showDetails,
    toggleShowDetails,
    article,
  } = useCountryNewsPage();

  return (
    <Container maxWidth="xl">
      {articleFormat === "list" && (
        <ListView
          articleList={articleList}
          onArticleSelect={toggleShowDetails}
        />
      )}
      {articleFormat === "tiles" && (
        <TilesView
          articleList={articleList}
          onArticleSelect={toggleShowDetails}
        />
      )}
      <Modal showModal={showDetails} onClose={toggleShowDetails}>
        <ArticleDetails article={article} />
      </Modal>
    </Container>
  );
};
