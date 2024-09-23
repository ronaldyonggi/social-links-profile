import styles from './Card.module.css';
import avatar from '../../assets/images/avatar-jessica.jpeg';

export default function Card() {
  return (
    <div className={styles.card}>
      <img
        className={styles.avatar}
        src={avatar}
        alt='Avatar image of a person'
      />
      <h1 className={styles.name}>Jessica Randall</h1>
      <p className={styles.location}>London, United Kingdom</p>
      <p className={styles.description}>
        "Front-end developer and avid reader."
      </p>
      <div className={styles.links}>
        <a className={styles.link} href=''>
          GitHub
        </a>
        <a className={styles.link} href=''>
          Frontend Mentor
        </a>
        <a className={styles.link} href=''>
          LinkedIn
        </a>
        <a className={styles.link} href=''>
          Twitter
        </a>
        <a className={styles.link} href=''>
          Instagram{' '}
        </a>
      </div>
    </div>
  );
}
