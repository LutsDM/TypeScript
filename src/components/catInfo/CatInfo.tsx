import styles from "./catInfo.module.css";

interface CatInfo {
  info: string;
  img: string;
}

export default function CatInfo({ info, img }: CatInfo) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={img} alt="cat img" />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.textCatInfo}>😼{info}😼</h3>
      </div>
    </div>
  );
}
