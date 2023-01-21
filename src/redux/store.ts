import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { articlesReducer } from "./articles/articlesSlise";

const rootReducer = combineReducers({
  articles: articlesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;