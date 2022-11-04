import { getGifsData } from '../../services/getData';
import useFirestore from '../../hooks/useFirestore';
import { useEffect, useState } from 'react';
import GridLayout from '../../layouts/GridLayout/GridLayout';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { setStoreFavorites } from '../../redux/features/favourites';
import { getCookies, setCookie, deleteCookie } from 'cookies-next';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import Head from 'next/head';

type Props = {};

const Favorites = (props: Props) => {
  const dispatch = useDispatch();
  const [favorites, setLocalFavorites] = useState([]);
  const { favourites } = useSelector((state: RootState) => state);
  const { getGifsData, addGifData, deleteGifData } = useFirestore();

  // @ts-ignore
  const email = decodeURIComponent(getCookies('email').email).replace(
    /\+/g,
    ' '
  );

  const getData = async () => {
    const data = await getGifsData('alejandroaperez1994g@gmail.com');
    setLocalFavorites(data);
    dispatch(setStoreFavorites(data));
  };

  useEffect(() => {
    getGifsData(email).then((data) => {
      dispatch(setStoreFavorites(data));
    });
  }, [favorites]);

  return (
    <div>
      <Head>
        <title>Favourites</title>
      </Head>
      <MainLayout>
        <div style={{ marginTop: '5rem' }}>
          <GridLayout data={favourites.favourites} favorites={true} />
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </MainLayout>
    </div>
  );
};

export default Favorites;
