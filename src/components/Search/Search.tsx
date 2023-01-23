import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks';
import useDebounce from 'hooks/useDebounce';
import { setPage } from 'redux/articles/articlesSlise';
import { fetchArticlesByQuery } from 'redux/articles/articlesThunks';
import sprite from 'assets/icons.svg';
import { Input, SearchIcon } from './Search.styled';

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
    dispatch(fetchArticlesByQuery({ query: debouncedQuery, page }));
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
        startAdornment={
          <SearchIcon>
            <use href={`${sprite}#icon-search`} />
          </SearchIcon>
        }
        placeholder="Space news"
      />
    </>
  );
};
