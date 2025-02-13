import { NavLink, useNavigate } from "react-router-dom";
import styles from "./header.module.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginToken } from "../../features/auth/authActions";
import { logoutUser } from "../../features/auth/authSlice";
import { RootState } from "../../app/store"; // Импортируем RootState для типизации

export default function Header() {
  // Используем Redux для получения данных о корзине и пользователе
  const cart = useAppSelector((state: RootState) => state.cart.items);
  const user = useAppSelector((state: RootState) => state.auth.user);
  
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Считаем общую сумму корзины с помощью Redux-состояния
  const totalAmount = (): number => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const [total, setTotal] = useState<number>(0);

  // Обработчик выхода пользователя
  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    dispatch(logoutUser());
  };

  // Используем эффект для обновления суммы корзины
  useEffect(() => {
    setTotal(totalAmount());
  }, [cart]);

  // Проверяем наличие токена и обновляем состояние пользователя
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && token.length > 0) {
      dispatch(loginToken(token));
    }
  }, [dispatch]);

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
        <span className={styles.userName}>{user?.firstName}</span>
      </div>
      <div className={styles.cartAndLogin}>
        <div className={styles.totalAmount}>🛒 {total.toFixed(1)} €</div>

        {!user?.id ? (
          <div>
            <NavLink
              className={({ isActive }) => (isActive ? styles.linkActive : "")}
              to="Login"
            >
              Login
            </NavLink>
          </div>
        ) : (
          <div className={styles.linkActive} onClick={handleLogOut}>
            Log out
          </div>
        )}
      </div>
    </div>
  );
}
