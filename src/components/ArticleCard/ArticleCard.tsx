import { CardMedia, Typography } from '@mui/material';
import { useLocation, useSearchParams } from 'react-router-dom';
import Highlighter from 'react-highlight-words';
import moment from 'moment';
import { Article } from 'types/types';
import sprite from 'assets/icons.svg';
import * as S from './ArticleCard.styled';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps): JSX.Element => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const date = moment(article.publishedAt).format('MMM Do, YYYY');
  const summary =
    article.summary.length > 100
      ? `${article.summary.slice(0, 100)}...`
      : article.summary;

  return (
    <S.StyledGrid item>
      <S.StyledLink to={`/${article.id}`} state={location}>
        <S.StyledCard variant="outlined">
          <CardMedia
            component="img"
            image={article.imageUrl}
            alt={article.title}
            width="100%"
            height="217"
          />
          <S.StyledCardContent>
            <S.Date>
              <S.CalendarIcon>
                <use href={`${sprite}#icon-calendar`} />
              </S.CalendarIcon>
              {date}
            </S.Date>
            <Typography
              variant="body1"
              fontSize={24}
              mb={'20px'}
              sx={{ lineHeight: 1.2 }}
            >
              <Highlighter
                searchWords={query.split(' ')}
                autoEscape={true}
                highlightClassName="highlight"
                textToHighlight={article.title}
              />
            </Typography>
            <Typography sx={{ marginBottom: '24px' }}>
              <Highlighter
                searchWords={query.split(' ')}
                autoEscape={true}
                highlightClassName="highlight"
                textToHighlight={summary}
              />
            </Typography>
            <S.ReadMore>
              Read more
              <S.ArrowRight>
                <use href={`${sprite}#icon-arrow-right`} />
              </S.ArrowRight>
            </S.ReadMore>
          </S.StyledCardContent>
        </S.StyledCard>
      </S.StyledLink>
    </S.StyledGrid>
  );
};
