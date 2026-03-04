import styles from './Section.module.css';

function Section({ id, children, className = '', variant = 'default' }) {
  const variantClass = variant === 'alt' ? styles.sectionAlt : '';

  return (
    <section
      id={id}
      className={`${styles.section} ${variantClass} ${className}`}
    >
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  );
}

export default Section;
