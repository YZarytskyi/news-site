import { getSelectedArticle } from 'api/articlesApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticlesByQuery } from 'api/articlesApi';
import { Article, ArticlesData, FetchArticlesReturnType } from 'types/types';

export const fetchArticlesByQuery = createAsyncThunk<
  ArticlesData | Article[],
  FetchArticlesReturnType
>('articles/fetch', async ({ query, page }, { rejectWithValue }) => {
  try {
    return await getArticlesByQuery(query, page);
  } catch (err: any) {
    console.log(err.response.data);
    return rejectWithValue(err.response.data);
  }
});

export const fetchArticleById = createAsyncThunk<Article, number>(
  'article/fetch',
  async (id, { rejectWithValue }) => {
    try {
      return await getSelectedArticle(id);
    } catch (err: any) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);
