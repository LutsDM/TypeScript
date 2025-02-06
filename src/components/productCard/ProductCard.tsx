import { Link } from "react-router-dom";
import styles from "./productCard.module.css";
import { useCart } from "../context/CartContext";

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({
  id,
  title,
  price,
  image,
}: IProductCardProps): JSX.Element {
  const { addToCart } = useCart();

  return (
    <div className={styles.shopContainerCard} key={id}>
      <Link to={String(id)} className={styles.cardLink}>
        <h4>{title.length < 20 ? title : title.slice(0, 20) + "..."}</h4>
        <p>Price: {price}€</p>
        <div className={styles.imgWrapper}>
          <img src={image} alt={title} />
        </div>
      </Link>
      <button
        className={styles.addToCartButton}
        onClick={() =>
          addToCart({
            id: id,
            title: title,
            price: price,
            quantity: 1,
            image: image,
          })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}
