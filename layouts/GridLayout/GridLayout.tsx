import styles from './styles.module.css';

import { motion } from 'framer-motion';
import ProductCard from '../../components/ProductCard/ProductCard';

type Props = {
  data?: any;
  noData?: string;
  title?: string;
  favorites?: boolean;
};

const GridLayout = ({ data, noData, title, favorites }: Props) => {
  return (
    <>
      <h2>{title}</h2>
      {data ? (
        <div className={styles.grid_container}>
          {data?.map((item: any, index: number) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.01 + index * 0.01 }}
              >
                <ProductCard item={item} favorites={favorites} />
              </motion.div>
            );
          })}
        </div>
      ) : (
        <h3>{noData}</h3>
      )}
    </>
  );
};

export default GridLayout;
