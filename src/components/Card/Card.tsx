import styles from './Card.module.css';
import avatar from '../../assets/images/photoshoot.jpg';
import { useState } from 'react';
import { FiSun } from 'react-icons/fi';
import { FaRegMoon } from 'react-icons/fa';

export default function Card() {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const themeClass = isLightTheme ? styles.themeLight : '';

  return (
    <div className={`${styles.bodyContainer} ${themeClass}`}>
      <div className={`${styles.card} ${themeClass}`}>
        <div className={styles.profileContainer}>
          <img
            className={styles.avatar}
            src={avatar}
            alt='Avatar image of a person'
          />
          <button
            onClick={toggleTheme}
            className={`${styles.toggleButton} ${themeClass}`}
          >
            {isLightTheme ? (
              <FaRegMoon />
            ) : (
              <FiSun style={{ color: 'white' }} />
            )}
          </button>
        </div>
        <h1 className={`${styles.name} ${themeClass}`}>Ronald Yonggi</h1>
        <p className={`${styles.location} ${themeClass}`}>
          Queens, New York
        </p>
        <p className={`${styles.description} ${themeClass}`}>
          "Full stack developer, DevOps engineer, and breakdancer in training."
        </p>
        <div className={styles.links}>
          <a className={styles.link} href='https://github.com/ronaldyonggi' target='_blank'>
            GitHub
          </a>
          <a className={styles.link} href='https://www.frontendmentor.io/profile/ronaldyonggi' target='_blank'>
            Frontend Mentor
          </a>
          <a className={styles.link} href='https://www.linkedin.com/in/ronaldyonggi/' target='_blank'>
            LinkedIn
          </a>
          <a className={styles.link} href='https://x.com/yonggron' target='_blank'>
            X / Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
