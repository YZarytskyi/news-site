import styled from "styled-components"
import Grid from "@mui/material/Grid/Grid";

export const StyledGrid = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 45px;
  margin-top: 45px;
`