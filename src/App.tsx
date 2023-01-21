import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import("./components/Home/Home"));
const ArticlePage = lazy(() => import("./components/ArticlePage/ArticlePage"));

function App() {
  return (
    <Suspense>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:articleId" element={<ArticlePage />} />
    </Routes>
  </Suspense>
  );
}

export default App;
