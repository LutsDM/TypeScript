import styles from "./home.module.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Hi!</h1>
      <p className={styles.text}>
        This website is the deployment of my practical frontend exercises.
      </p>
      <p className={styles.text}>
        Here, I explored:
      </p>
      <div className={styles.skills}>
        <div className={styles.skill}>
          <FaHtml5 size="3em" className={styles.icon} />
          <span className={styles.skillName}>HTML5</span>
        </div>
        <div className={styles.skill}>
          <FaCss3Alt size="3em" className={styles.icon} />
          <span className={styles.skillName}>CSS</span>
        </div>
        <div className={styles.skill}>
          <FaJsSquare size="3em" className={styles.icon} />
          <span className={styles.skillName}>JavaScript</span>
        </div>
        <div className={styles.skill}>
          <FaReact size="3em" className={styles.icon} />
          <span className={styles.skillName}>React</span>
        </div>
        <div className={styles.skill}>
          <SiTypescript size="3em" className={styles.icon} />
          <span className={styles.skillName}>TypeScript</span>
        </div>
      </div>
      
      <a
        href="https://www.linkedin.com/in/dmytro-luts-a901b72b3/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="Screenshot_4.jpg" alt="LinkedIn screen" className={styles.image} />
      </a>
    </div>
  );
}
