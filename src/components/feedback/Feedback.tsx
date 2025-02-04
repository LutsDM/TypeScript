import { useState } from "react";
import MyButton from "../myButton/MyButton";
import styles from './feedback.module.css'



export default function Feedback(): JSX.Element {
  const [like, setLike] = useState<number>(0);
  const [dislike, setDislike] = useState<number>(0);
  

  const handleLike = () => {
    setLike((prev) => prev + 1);
  };
  const handleDislike = () => {
    setDislike((prev) => prev + 1);
  };
  const handleReset = () => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div>
      <h2>Like counter</h2>
      <div>
        <img
          className={styles.likeCounterImg}
          src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxjepq6fu1cpvnmsubbdo.jpg"
          alt="mem"
        />
      </div>
      <span className={styles.likeCounter}>{like}</span>
      <MyButton func={handleLike} text={"Like"} type={"button"} />
      <MyButton func={handleDislike} text={"Dislike"} type={"button"} />
      <span className={styles.likeCounter}>{dislike}</span>

      <div>
        <MyButton func={handleReset} text={"Reset"} type={"button"} />
      </div>
    </div>
  );
}
