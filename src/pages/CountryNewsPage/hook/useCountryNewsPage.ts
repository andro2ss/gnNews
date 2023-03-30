import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axiosHelper from "../../../helpers/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ListFormatType } from "../../../redux/reducers/listFormatReducer";
import { setAmount } from "../../../redux/reducers/listAmountReducer";

export interface Article {
  source: {
    id: string | null;
    name: string | null;
  };
  author: string | null;
  title: string | null;
  description: string | null;
  url: string | null;
  urlToImage: string | null;
  publishedAt: string | null;
  content: string | null;
}

export const useCountryNewsPage = () => {
  const initArticle: Article = {
    source: { id: null, name: null },
    urlToImage: null,
    url: null,
    description: null,
    publishedAt: null,
    title: null,
    author: null,
    content: null,
  };

  const [showDetails, setShowDetails] = useState(false);
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [article, setArticle] = useState<Article>(initArticle);
  const [lastLocation, setLastLocation] = useState("");
  const [url, setUrl] = useState("");
  const articleFormat: ListFormatType = useSelector(
    (state: RootState) => state.listFormat.form
  );
  const dispatch = useDispatch();

  const setArticleAmount = (articleAmount: number) => {
    dispatch(setAmount(articleAmount));
  };

  const toggleShowDetails = (article?: Article) => {
    if (article?.source?.id) setArticle(article);
    else setArticle(initArticle);
    setShowDetails(!showDetails);
  };

  const key = "88a33a74072c458792dd19acd38e8921";
  const location = useLocation();

  const initArticleList = useCallback(() => {
    if (articleList.length > 0) setArticleList([]);
  }, [articleList]);

  const getSearchTerm = () => {
    const params = new URLSearchParams(location.search);
    const countryCode = params.get("countryCode");
    if (countryCode === null) return "top-headlines?sources=bbc-news";
    else return `top-headlines?country=` + countryCode;
  };

  const buildUrl = useCallback(() => {
    if (location.pathname === lastLocation) return;
    setLastLocation(location.pathname);
    initArticleList();
    setUrl(
      `https://newsapi.org/v2/${getSearchTerm()}&pageSize=100&apiKey=${key}`
    );
  }, [location.pathname, lastLocation]);

  useEffect(() => {
    buildUrl();
  }, [location.pathname]);

  const getArticleList = useCallback(async () => {
    await axiosHelper.get(url).then((data) => {
      // @ts-ignore
      setArticleList(data?.data?.articles as Article[]);
      setArticleAmount(data?.data?.articles?.length ?? 0);
    });
  }, [url]);

  useEffect(() => {
    if (url.length === 0) return;
    getArticleList().catch((error) => console.warn(error.message));
  }, [url]);

  return {
    articleList,
    articleFormat,
    showDetails,
    toggleShowDetails,
    article,
  };
};
