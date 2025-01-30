import styles from "./home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faGitAlt } from '@fortawesome/free-brands-svg-icons';

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
      <ul className={styles.skillsList}>
        <li>
          <FontAwesomeIcon icon={faHtml5} size="2x" className={styles.icon} />
          <span className={styles.skillName}>HTML5</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3Alt} size="2x" className={styles.icon} />
          <span className={styles.skillName}>CSS</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faJsSquare} size="2x" className={styles.icon} />
          <span className={styles.skillName}>JavaScript</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faReact} size="2x" className={styles.icon} />
          <span className={styles.skillName}>React</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faGitAlt} size="2x" className={styles.icon} />
          <span className={styles.skillName}>TypeScript</span>
        </li>
      </ul>

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
