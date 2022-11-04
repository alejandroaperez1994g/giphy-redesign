import { useGetRandomGIFQuery } from '../../redux/gifAPI';
import { Container, Stack, Typography } from '@mui/material';
import ProductCard from '../../components/ProductCard/ProductCard';
import GridLayout from '../../layouts/GridLayout/GridLayout';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import MainLayout from '../../layouts/MainLayout/MainLayout';
type Props = {};

const Home = (props: Props) => {
  const {
    data: randomGifs,
    isLoading,
    isError,
  } = useGetRandomGIFQuery(undefined);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <MainLayout>
        <Container sx={{ mt: '5rem' }}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Trending Gifs! 🎉
          </Typography>

          <GridLayout data={randomGifs?.data} />
        </Container>
        <Toaster position="top-center" reverseOrder={false} />
      </MainLayout>
    </>
  );
};

export default Home;
