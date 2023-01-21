import { CardMedia, Typography } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Highlighter from 'react-highlight-words';
import moment from 'moment';
import EastIcon from '@mui/icons-material/East';
import { Article } from 'types/types';
import { useAppSelector } from 'hooks/redux-hooks';
import * as S from './ArticleCard.styled';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps): JSX.Element => {
  const query = useAppSelector(state => state.articles.query);
  const date = moment(article.publishedAt).format('MMM Do, YYYY');
  const summary =
    article.summary.length > 100
      ? `${article.summary.slice(0, 100)}...`
      : article.summary;

  return (
    <S.StyledGrid item>
      <S.StyledLink to={`/${article.id}`}>
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
              <CalendarTodayOutlinedIcon sx={{ width: 14, height: 14 }} />{' '}
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
              Read more <EastIcon />
            </S.ReadMore>
          </S.StyledCardContent>
        </S.StyledCard>
      </S.StyledLink>
    </S.StyledGrid>
  );
};
