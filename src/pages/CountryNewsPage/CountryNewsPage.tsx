import React from "react";
import { useCountryNewsPage } from "./hook/useCountryNewsPage";
import { ListView } from "./items/ListView";
import { TilesView } from "./items/TilesView";

export const CountryNewsPage = () => {
  const { articleList, articleFormat } = useCountryNewsPage();

  return (
    <>
      {articleFormat === "list" && <ListView articleList={articleList} />}
      {articleFormat === "tiles" && <TilesView articleList={articleList} />}
    </>
  );
};
