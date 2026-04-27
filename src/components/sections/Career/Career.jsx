import { careers } from '../../../data/career';
import Section from '../../common/Section';
import styles from './Career.module.css';

function Career() {
  return (
    <Section id="career">
      <h2 className={styles.sectionTitle}>Career</h2>
      <div className={styles.timeline}>
        {careers.map((career) => (
          <div key={career.id} className={styles.timelineItem}>
            <div className={styles.timelineDot}>
              {career.isCurrentJob && <span className={styles.currentDot} />}
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.company}>{career.company}</h3>
                <span className={styles.period}>{career.period}</span>
              </div>
              <div className={styles.details}>
                <span className={styles.position}>{career.position}</span>
                {career.duration && (
                  <span className={styles.duration}>{career.duration}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className={styles.source}>* 국민연금 가입이력 기준</p>
    </Section>
  );
}

export default Career;
