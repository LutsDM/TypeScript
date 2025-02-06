import styles from "./cart.module.css";
import { useCart } from "../context/CartContext";
import MyButton from "../myButton/MyButton";
import { useEffect, useState } from "react";

export default function Cart(): JSX.Element {
  const {
    cart,
    clearCart,
    removeFromCart,
    totalAmount,
    plusQuantity,
    minusQuantity,
  } = useCart();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(totalAmount());
  }, [cart]);

  return (
    <div>
      <h2>Cart 🛒</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty...</p>
      ) : (
        <div className={styles.cartContainer}>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>№</th>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total for Item</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((el, index) => (
                <tr key={el.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={el.image} alt={el.title} width="25" />
                  </td>
                  <td>{el.title}</td>
                  <td>{el.price} EUR</td>
                  <td>
                    <button
                      className={styles.buttonX}
                      onClick={() => minusQuantity(el.id)}
                    >
                      -
                    </button>
                    {el.quantity}
                    <button
                      className={styles.buttonX}
                      onClick={() => plusQuantity(el.id)}
                    >
                      +
                    </button>
                  </td>
                  <td>{(el.price * el.quantity).toFixed(2)} EUR</td>
                  <td>
                    <button
                      className={styles.buttonX}
                      onClick={() => removeFromCart(el.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.amountContainer}>
            Total amount: {total.toFixed(2)} EUR
          </div>
          <MyButton text="Delete All" variant="danger" func={clearCart} />
        </div>
      )}
    </div>
  );
}
