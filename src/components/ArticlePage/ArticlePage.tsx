import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchArticleById } from '../../redux/articles/articlesThunks';
import WestIcon from '@mui/icons-material/West';
import {
  Article,
  GoBackLink,
  StyledBox,
  Summary,
  Title,
} from './ArticlePage.styled';

const ArticlePage = () => {
  const { articleId } = useParams();

  const article = useAppSelector(state => state.articles.selectedArticle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleById(Number(articleId)));
  }, []);

  return (
    <>
      {article && (
        <>
          <StyledBox img={article.imageUrl} />
          <Article raised={true}>
            <Title>{article.title}</Title>
            <Summary>{article.summary}</Summary>
            <GoBackLink to="/">
              <WestIcon sx={{ width: 12, height: 12 }} /> Back to homepage
            </GoBackLink>
          </Article>
        </>
      )}
    </>
  );
};

export default ArticlePage;
