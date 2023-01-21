import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { CardContent } from '@mui/material';
import { Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';

export const StyledGrid = styled(Grid)`
  width: calc((100% - 90px) / 3);
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  border: 1px solid #eaeaea;
`;

export const StyledCard = styled(Card)`
  &.MuiCard-root {
    height: 100%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledCardContent = styled(CardContent)`
  &.MuiCardContent-root {
    display: flex;
    flex-direction: column;
    height: calc(100% - 217px);
    padding: 25px;
    & .highlight {
      background-color: #FFF619;
    }
  }
`;

export const Date = styled.p`
  margin-top: 0;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #363636;
  font-size: 14px;
  line-height: 1.5;
  opacity: 0.6;
`;

export const ReadMore = styled(Typography)`
  &.MuiTypography-root {
    margin-top: auto;
    margin-bottom: 0;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 700;
  }
`;
