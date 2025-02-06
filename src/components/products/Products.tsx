import { useEffect, useState } from "react";
import styles from "./products.module.css";
import { IProduct } from "./types/types";
import ProductCard from "../productCard/ProductCard";
import LimitForm from "./limitForm/LimitForm";
import Loader from "../loader/Loader";

export default function Products(): JSX.Element {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [limit, setLimit] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getProducts = async (limit: number) => {
    setIsLoading(true);
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    const data: IProduct[] = await res.json();
    setProducts(data);
    setIsLoading(false);
    console.log(data);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    getProducts(newLimit);
  };

  useEffect(() => {
    getProducts(limit);
  }, []);

  return (
    <>
      <div className={styles.productContainer}>
        <div className={styles.limitWrapper}>
          <LimitForm onLimitChange={handleLimitChange} />
        </div>
        <div className={styles.shopContainer}>
          {isLoading ? (
            <Loader />
          ) : (
            products.map((product) => (
              <div key={product.id} className={styles.productWrapper}>
                <ProductCard
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
