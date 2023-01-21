import { Divider, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchArticlesByQuery } from '../../redux/articles/articlesThunks';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { StyledGrid } from './Articles.styled';

export const Articles = () => {
  const dispatch = useAppDispatch();
  const {articles, articlesCount, query, isLoading} = useAppSelector(state => state.articles);

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (query) {
      dispatch(fetchArticlesByQuery({query, page}))
    }
  }, [page, query])

  const hasMore = articlesCount - page * 12 > 0;

  return (
    <>
      <Typography fontWeight={600} mt={5}>
        Results: {articlesCount}
      </Typography>
      <Divider />
      {isLoading && <p>Loading...</p>}
      <InfiniteScroll
        dataLength={articlesCount}
        next={() => setPage(state => state + 1)}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p>No more articles found</p>}
      >
        <StyledGrid container>
          {articles &&
            articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
        </StyledGrid>
      </InfiniteScroll>
    </>
  );
};
