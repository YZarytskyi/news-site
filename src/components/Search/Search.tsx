import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from './Search.styled';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { setQuery } from '../../redux/articles/articlesSlise';

export const Search = (): JSX.Element => {

  const query = useAppSelector(state => state.articles.query)
  const dispatch = useAppDispatch();

  const onChangeInput: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch(setQuery(e.target.value));
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
