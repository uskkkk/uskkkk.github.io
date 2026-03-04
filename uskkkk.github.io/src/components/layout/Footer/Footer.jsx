import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <span>v.2.0.0-alpha</span>
        <span className={styles.divider}>/</span>
        <a
          href="https://github.com/uskkkk"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Github
        </a>
        <span className={styles.divider}>/</span>
        <span>Thanks for Outsider</span>
      </div>
    </footer>
  );
}

export default Footer;
