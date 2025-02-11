import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginToken } from "../auth/authActions";

export default function Header() {
  const { cart, totalAmount } = useCart();
  const [total, setTotal] = useState<number>(0);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch()


  useEffect(() => {
    setTotal(totalAmount());
  }, [cart]);

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token && token.length > 0) {dispatch(loginToken(token))}
  }, []);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.navyLinks}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="Lessons"
        >
          Lessons
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="Homeworks"
        >
          Homework
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="Login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"store"}
        >
          Store
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"cart"}
        >
          Cart
        </NavLink>
      </div>
      <div>
        <span className={styles.userName}>{user.firstName}</span>
      </div>
      <div>
        <span className={styles.totalAmount}>🛒 {total.toFixed(1)} €</span>
      </div>
    </div>
  );
}
