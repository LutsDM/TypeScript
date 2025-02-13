import styles from "./cart.module.css";
import MyButton from "../myButton/MyButton";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import {
  selectTotalAmount,
  plusQuantity,
  minusQuantity,
  removeFromCart,
  clearCart,
} from "../../features/cart/cartSlice";

export default function Cart(): JSX.Element {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const total = useSelector(selectTotalAmount);

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
              {cart.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.image} alt={item.title} width="25" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price.toFixed(2)} EUR</td>
                  <td>
                    <button
                      className={styles.buttonX}
                      onClick={() => dispatch(minusQuantity(item.id))}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className={styles.buttonX}
                      onClick={() => dispatch(plusQuantity(item.id))}
                    >
                      +
                    </button>
                  </td>
                  <td>{(item.price * item.quantity).toFixed(2)} EUR</td>
                  <td>
                    <button
                      className={styles.buttonX}
                      onClick={() => dispatch(removeFromCart(item.id))}
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
          <MyButton text="Delete All" variant="danger" func={() => dispatch(clearCart())} />
        </div>
      )}
    </div>
  );
}
