import { createSlice } from '@reduxjs/toolkit';
import { Article } from 'types/types';
import { fetchArticleById, fetchArticlesByQuery } from './articlesThunks';

interface InitialState {
  articles: Article[];
  articlesCount: number;
  selectedArticle: Article | null;
  page: number;
  isLoading: boolean;
  error: null | string;
}

const initialState: InitialState = {
  articles: [],
  articlesCount: 0,
  selectedArticle: null,
  page: 1,
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
    setPage: (state, action) => {
      state.page = action.payload
    },
    incrementPage: (state) => {
      state.page = state.page + 1
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchArticlesByQuery.pending, state => {
        if (state.page === 1) {
          state.isLoading = true;
        }
      })
      .addCase(fetchArticlesByQuery.fulfilled, (state, action) => {
        state.error = null;
        if (Array.isArray(action.payload)) {
          state.articles = [...state.articles, ...action.payload];
        } else {
          state.articles = action.payload.articles;
          state.articlesCount = action.payload.count;
        }
        state.isLoading = false;
      })
      .addCase(fetchArticlesByQuery.rejected, (state, action: any) => {
        state.error = action.payload;
        state.isLoading = false;
      });
    builder
      .addCase(fetchArticleById.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.error = null;
        state.selectedArticle = action.payload
        state.isLoading = false;
      })
      .addCase(fetchArticleById.rejected, (state, action: any) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const { clearArticles, removeSelectedArticle, setPage, incrementPage } =
  articlesSlice.actions;

export const articlesReducer = articlesSlice.reducer;
