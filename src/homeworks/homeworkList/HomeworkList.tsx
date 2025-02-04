import { Link } from "react-router-dom";
import styles from './homeworkList.module.css'

export default function HomeworkList() {
  return (
    <>
      <h2>Homeworks</h2>
      <div className={styles.gridContainer}>
        <Link to='/homework-1'><div>Homework 1</div></Link>
        <Link to="/homework-2"><div>Homework 2</div></Link>
        <Link to='/homework-3'><div>Homework 3</div></Link>
        <Link to='/homework-4'><div>Homework 4</div></Link>
        <Link to='/homework-5'><div>Homework 5</div></Link>
        <Link to='/homework-6'><div>Homework 6</div></Link>
        <Link to='/homework-7'><div>Homework 7</div></Link>
        <Link to='/registrationAndLoginForm'><div>Yup</div></Link>
      
      </div>
    </>
  )
}
