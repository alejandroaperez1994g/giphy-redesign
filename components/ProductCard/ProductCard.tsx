import styles from './styles.module.css';
import Image from 'next/image';
import Tooltip from '@mui/material/Tooltip';
import toast, { Toaster } from 'react-hot-toast';
import useFirestore from '../../hooks/useFirestore';
import { useDispatch } from 'react-redux';
import { getCookies, setCookie, deleteCookie } from 'cookies-next';
import { setStoreFavorites } from '../../redux/features/favourites';

type Props = {
  item: any;
  favorites?: boolean;
};

const ProductCard = ({ item, favorites }: Props) => {
  const dispatch = useDispatch();

  // @ts-ignore
  const email = decodeURIComponent(getCookies('email').email).replace(
    /\+/g,
    ' '
  );

  const { addGifData, checkGifExistence, getGifsData } = useFirestore();

  const addToFavorites = async () => {
    checkGifExistence(
      email,
      favorites ? item.src : item.images.preview_gif.url,
      item.title
    );

    setTimeout(() => {
      updateStore();
    }, 1000);
  };

  const updateStore = async () => {
    const response = await getGifsData(email);
    dispatch(setStoreFavorites(response));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(item.images.preview_gif.url);
    toast.success('Copied to clipboard!');
  };

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.tools}>
          <Tooltip title="Add or Remove from Favourites">
            <div className={styles.circle} onClick={addToFavorites}>
              <span className={`${styles.red} ${styles.box}`}></span>
            </div>
          </Tooltip>
          <div className={styles.circle}>
            <span className={`${styles.yellow} ${styles.box}`}></span>
          </div>
          <Tooltip title="Copy to Clipboard">
            <div className={styles.circle} onClick={copyToClipboard}>
              <span className={`${styles.green} ${styles.box}`}></span>
            </div>
          </Tooltip>
        </div>
        <div className={styles.card__content}>
          <Image
            className={styles.card__image}
            src={favorites ? item.src : item.images.preview_gif.url}
            width={300}
            height={220}
            alt={item.title}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
