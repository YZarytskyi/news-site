import { createSlice } from '@reduxjs/toolkit';
import { Article } from 'types/types';
import { fetchArticlesByQuery } from './articlesThunks';

interface InitialState {
  articles: Article[];
  articlesCount: number;
  selectedArticle: Article | null;
  query: string;
  isLoading: boolean;
  error: null | string;
}

const initialState: InitialState = {
  articles: [],
  articlesCount: 0,
  selectedArticle: null,
  query: '',
  isLoading: false,
  error: null,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    clearArticles: state => {
      state.articles = [];
    },
    removeSelectedArticle: state => {
      state.selectedArticle = null;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticlesByQuery.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchArticlesByQuery.fulfilled, (state, action) => {
        state.error = null;
        if (Array.isArray(action.payload)) {
          state.articles = [...state.articles, ...action.payload];
        } else {
          state.articles = [...state.articles, ...action.payload.articles];
          state.articlesCount = action.payload.count;
        }
        state.isLoading = false;
      })
      .addCase(fetchArticlesByQuery.rejected, (state, action: any) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { clearArticles, removeSelectedArticle, setQuery } =
  articlesSlice.actions;

export const articlesReducer = articlesSlice.reducer;
