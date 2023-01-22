import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from './Search.styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { useSearchParams } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import { fetchArticlesByQuery } from '../../redux/articles/articlesThunks';
import { setPage } from '../../redux/articles/articlesSlise';

export const Search = (): JSX.Element => {
  const page = useAppSelector(state => state.articles.page);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<string>(() => {
    const searchQuery = searchParams.get('query');
    return searchQuery?.toLowerCase() || '';
  });

  const debouncedQuery = useDebounce<string>(query, 250);

  useEffect(() => {
    if (query) {
      dispatch(fetchArticlesByQuery({ query: debouncedQuery, page }));
    }
  }, [page, debouncedQuery]);

  useEffect(() => {
    dispatch(setPage(1));
    if (query) {
      searchParams.set('query', query.trim().toLowerCase());
      setSearchParams(searchParams);
      return;
    }
    searchParams.delete('query');
    setSearchParams(searchParams);
  }, [query]);

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Typography fontWeight={600} mb={'10px'}>
        Filter by keywords
      </Typography>
      <Input
        onChange={onChangeInput}
        value={query}
        startAdornment={<SearchIcon />}
        placeholder="Space news"
      />
    </>
  );
};
