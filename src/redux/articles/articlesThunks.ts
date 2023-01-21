import { createAsyncThunk } from '@reduxjs/toolkit';
import { getArticlesByQuery } from 'api/articlesApi';
import { Article, ArticlesData, FetchArticlesReturnType } from 'types/types';

export const fetchArticlesByQuery = createAsyncThunk<
  ArticlesData | Article[],
  FetchArticlesReturnType 
>('games/fetch', async ({ query, page }, { rejectWithValue }) => {
  try {
    return await getArticlesByQuery(query, page);
  } catch (err: any) {
    console.log(err.response.data);
    return rejectWithValue(err.response.data);
  }
});
