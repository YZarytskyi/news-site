import Container from '@mui/material/Container';
import { Articles } from '../Articles/Articles';
import { Search } from '../Search/Search';

function Home() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ paddingBlock: 6.25, width: '1440px', paddingInline: '75px' }}
    >
      <Search />
      <Articles />
    </Container>
  );
}

export default Home;
