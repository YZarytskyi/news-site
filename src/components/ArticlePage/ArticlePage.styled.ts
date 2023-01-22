import { Box, Card, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface StyledBoxProps {
  img: string;
}

export const StyledBox = styled(Box)<StyledBoxProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 245px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: center;
`;

export const Article = styled(Card)`
  &.MuiPaper-root {
    position: relative;
    z-index: 1;
    max-width: 1290px;
    margin-top: 150px;
    margin-left: auto;
    margin-right: auto;
    padding: 35px 75px 50px 75px;
    overflow: visible;
    border: 1px solid #eaeaea;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
  }
`;

export const Title = styled(Typography)`
  &.MuiTypography-root {
    text-align: center;
    font-size: 24px;
    margin-bottom: 50px;
  }
`;

export const Summary = styled(Typography)`
  &.MuiTypography-root {
    font-size: 18px;
  }
`;

export const GoBackLink = styled(Link)`
  position: absolute;
  bottom: -55px;
  left: 75px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
`;
