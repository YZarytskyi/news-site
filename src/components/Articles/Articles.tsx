import { Divider, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { incrementPage } from 'redux/articles/articlesSlise';
import { StyledGrid } from './Articles.styled';

export const PER_PAGE: 6 = 6;

export const Articles = () => {
  const dispatch = useAppDispatch();
  const { articles, articlesCount, page, isLoading } = useAppSelector(
    state => state.articles
  );

  const hasMore = articlesCount - page * PER_PAGE > 0;

  return (
    <>
      <Typography fontWeight={600} mt={5}>
        Results: {articlesCount}
      </Typography>
      <Divider />
      {isLoading && <p>Loading...</p>}
      <InfiniteScroll
        dataLength={articlesCount}
        next={() => {
          dispatch(incrementPage());
        }}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p>No more articles found</p>}
      >
        <StyledGrid container>
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </StyledGrid>
      </InfiniteScroll>
    </>
  );
};
