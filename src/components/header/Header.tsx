import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

export default function Header() {
  const { cart, totalAmount } = useCart();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setTotal(totalAmount());
  }, [cart]);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.navyLinks}><NavLink
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
        to="Practice"
      >
        Practice
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
        <span className={styles.totalAmount}>🛒 {total.toFixed(1)} €</span>
      </div>
    </div>
  );
}
