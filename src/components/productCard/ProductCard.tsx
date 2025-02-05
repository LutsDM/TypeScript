import { Link } from "react-router-dom";
import styles from './productCard.module.css';

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: IProductCardProps): JSX.Element {
  return (
    <Link to={String(id)}>
      <div className={styles.shopContainerCard} key={id}>
        <h4>{title.length < 20 ? title : title.slice(0, 20) + '...'}</h4>
        <p>Price: {price}€</p>
        <div className={styles.imgWrapper}>
          <img src={image} />
        </div>
      </div>
    </Link>
  );
}
