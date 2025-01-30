import { NavLink } from "react-router-dom"
import styles from "./header.module.css"


export default function Header() {
  return (
    <>
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
          to="Homework"
        >
          Homework
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="Practice"
        >
          Practice
        </NavLink>
    </>
  )
}
