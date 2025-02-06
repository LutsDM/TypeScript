import styles from "./cart.module.css";

import { useCart } from "../context/CartContext";
import MyButton from "../myButton/MyButton";
import { useEffect, useState } from "react";

export default function Cart(): JSX.Element {
  const { cart, clearCart, removeFromCart, totalAmount } = useCart();
  const [total, setTotal] = useState<number>(0);
  
  useEffect(() => {
    setTotal(totalAmount()); 
  }, [cart]); 

  return (
    <div>
      <h2>Cart 🛒</h2>
      <div>
        {cart.map((el) => (
          <div>
            <h3>
              {el.title} quantity: {el.quantity}
            </h3>
            <h3>{el.price} EUR</h3>
            <h3>Total for item: {el.price * el.quantity} EUR</h3>
            <button onClick={() => removeFromCart(el.id)}>delete</button>
          </div>
        ))}
      </div>
      <span>Total amount:</span>
      <div className={styles.amountContainer}>{total.toFixed(1)} EUR</div>
      <MyButton text="Delete All" variant="danger" func={clearCart} />
    </div>
  );
}
