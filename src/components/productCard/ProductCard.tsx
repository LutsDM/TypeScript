import { Link } from "react-router-dom";
import styles from "./productCard.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice"; // Импортируй экшен

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
  const dispatch = useDispatch(); // Используем dispatch для работы с Redux

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: id,
        title: title,
        price: price,
        quantity: 1,
        image: image,
      })
    );
  };

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
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
