import styles from './lesson14.module.css'

import Products from "../../components/products/Products";

export default function Lesson14():JSX.Element {
  return (
    <div className= {styles.lesson14Container}>
      <h2>Lesson 14 🛒</h2>
      <Products/>
    </div>
  )
}