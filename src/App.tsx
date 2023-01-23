import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const ArticlePage = lazy(() => import('./components/ArticlePage/ArticlePage'));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:articleId" element={<ArticlePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
