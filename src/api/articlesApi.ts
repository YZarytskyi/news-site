import axios from 'axios';
import { Article } from 'types/types';

const articlesApi = axios.create({
  baseURL: 'https://api.spaceflightnewsapi.net/v3',
});

export const getArticlesByQuery = async (query: string, page: number) => {
  const start = (page - 1) * 12;
  const getArticles = articlesApi.get<Article[]>(
    `/articles?summary_contains=${query}&_start=${start}&_limit=12`
  );
  const getArticlesCount = articlesApi.get<number>(
    `/articles/count?summary_contains=${query}`
  );
  if (page === 1) {
    const [responseCount, responseData] = await Promise.all([
      getArticlesCount,
      getArticles,
    ]);
    return { count: responseCount.data, articles: responseData.data };
  }
  const response = await getArticles;
  return response.data;
};

export const getSelectedArticle = async (id: number) => {
  const response = await articlesApi.get<Article>(`/articles/${id}`);
  return response.data;
};
