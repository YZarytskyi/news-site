import { OutlinedInput } from '@mui/material';
import styled from "styled-components";

export const Input = styled(OutlinedInput)` 
  &.MuiOutlinedInput-root {
    padding-left: 20px;
    width: 600px;
    border: 1px solid #EAEAEA;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
  }
  & .MuiOutlinedInput-input {
    padding: 13px 20px; 
  }
`