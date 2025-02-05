import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProduct } from "../products/types/types";
import Loader from "../loader/Loader";
import styles from "./productPage.module.css";

const initialProduct: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

export default function ProductPage(): JSX.Element {
  const [product, setProduct] = useState<IProduct>(initialProduct);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data: IProduct) => setProduct(data));
    }, 1500);
  }, [id]);

  return (
    <div className={styles.productPage}>
      {product.title ? (
        <>
          <div className={styles.productDetails}>
            <div className={styles.left}>
              <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.right}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className={styles.price}>{product.price}€</p>
              <p className={styles.category}>Category: {product.category}</p>
              <div className={styles.rating}>
                <span>Rating: {product.rating.rate}</span>
                <span>({product.rating.count} reviews)</span>
              </div>
            </div>
          </div>
          <Link to="/lesson-14" className={styles.backLink}>
            Back to main page
          </Link>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}
