import Head from 'next/head';
import { Container, Stack, Typography } from '@mui/material';
import GridLayout from '../../layouts/GridLayout/GridLayout';
import { useGetRandomGIFQuery } from '../../redux/gifAPI';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import MainLayout from '../../layouts/MainLayout/MainLayout';

type Props = {};

const Search = (props: Props) => {
  const router = useRouter();
  const { search } = router.query;
  const {
    data: randomGifs,
    isLoading,
    isError,
  } = useGetRandomGIFQuery(undefined);

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <MainLayout>
        <Container>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Latest Gifs! 🎉
          </Typography>

          <GridLayout data={randomGifs?.data} />
        </Container>
      </MainLayout>
    </>
  );
};

export default Search;
