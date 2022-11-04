import { useSearchGIFQuery } from '../../redux/gifAPI';
import { useRouter } from 'next/router';
import useDebounce from '../../hooks/useDebounce';
import GridLayout from '../../layouts/GridLayout/GridLayout';
import toast, { Toaster } from 'react-hot-toast';
import MainLayout from '../../layouts/MainLayout/MainLayout';
import styles from './styles.module.css';

type Props = {};

const Search = (props: Props) => {
  const router = useRouter();
  const { search } = router.query;

  const { data: searchData, isLoading, isError } = useSearchGIFQuery(search);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      router.push(`/search/${e.target.value}`);
    }, 750);
  };

  return (
    <div>
      <MainLayout>
        <div className={styles.container}>
          <GridLayout data={searchData?.data} />
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </MainLayout>
    </div>
  );
};

export default Search;
