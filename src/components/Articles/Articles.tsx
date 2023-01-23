import { Divider, Typography } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import { ArticleCard } from '../ArticleCard/ArticleCard';
import { incrementPage } from 'redux/articles/articlesSlise';
import { Loading, StyledGrid } from './Articles.styled';

export const PER_PAGE: 12 = 12;

export const Articles = () => {
  const dispatch = useAppDispatch();
  const { articles, articlesCount, page, isLoading } = useAppSelector(
    state => state.articles
  );

  const hasMore = articlesCount - page * PER_PAGE > 0;

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <>
      <Typography fontWeight={600} mt={5}>
        Results: {articlesCount}
      </Typography>
      <Divider />
      <InfiniteScroll
        dataLength={articles.length}
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
