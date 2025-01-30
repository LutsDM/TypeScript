import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.css";

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="lesson05"
        >
          lesson05
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="fetch-fox"
        >
          Fetch Fox
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="lesson-08"
        >
          Lesson 08
        </NavLink>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
}
