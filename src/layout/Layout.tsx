import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import Header from "../components/header/Header";


export default function Layout() {
 
  return (
    <>
      <header className={styles.header}>
       <Header/>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/dmytro-luts-a901b72b3/">
        <div>
        Linkedin
        </div>
        </a>
        </footer>
    </>
  );
}
