import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import { fetchArticleById } from '../../redux/articles/articlesThunks';
import sprite from 'assets/icons.svg';
import * as S from './ArticlePage.styled';

const ArticlePage = () => {
  const { articleId } = useParams();
  const location = useLocation();

  const article = useAppSelector(state => state.articles.selectedArticle);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleById(Number(articleId)));
  }, []);

  let goBackPath: string = '/';
  const searchParams = location.state?.search
  if (searchParams) {
    goBackPath = `/${searchParams}`
  }

  return (
    <>
      {article && (
        <>
          <S.StyledBox img={article.imageUrl} />
          <S.Article raised={true}>
            <S.Title>{article.title}</S.Title>
            <S.Summary>{article.summary}</S.Summary>
            <S.GoBackLink to={goBackPath}>
              <S.ArrowLeft>
                <use href={`${sprite}#icon-arrow-left`} />
              </S.ArrowLeft>{' '}
              Back to homepage
            </S.GoBackLink>
          </S.Article>
        </>
      )}
    </>
  );
};

export default ArticlePage;
