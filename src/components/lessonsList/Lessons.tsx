import { Link } from "react-router-dom";
import styles from './lessons.module.css'

export default function Lessons() {
  return (
    <div>
      <h2>Lessons</h2>
      <div className={styles.gridContainer}>
        <Link to='lesson-1'><div>Lesson 1</div></Link>
        <Link to='lesson-2'><div>Lesson 2</div></Link>
        <Link to='lesson-3'><div>Lesson 3</div></Link>
        <Link to='lesson-4'><div>Lesson 4</div></Link>
        <Link to='lesson-5'><div>Lesson 5</div></Link>
        <Link to='lesson-6'><div>Lesson 6</div></Link>
        <Link to='lesson-7'><div>Lesson 7</div></Link>
        <Link to='lesson-8'><div>Lesson 8</div></Link>
        <Link to='lesson-9'><div>Lesson 9</div></Link>
        <Link to='lesson-10'><div>Lesson 10</div></Link>
      </div>
    </div>
  )
}
