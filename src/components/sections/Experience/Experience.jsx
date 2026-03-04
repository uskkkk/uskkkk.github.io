import { experiences } from '../../../data/experience';
import Section from '../../common/Section';
import GradientText from '../../common/GradientText';
import styles from './Experience.module.css';

function Experience() {
  return (
    <Section id="experience" variant="alt">
      <h2 className={styles.sectionTitle}>
        <GradientText>Experience</GradientText>
      </h2>
      <div className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <div key={exp.id} className={styles.experienceItem}>
            <div className={styles.experienceContent}>
              <div className={styles.experienceHeader}>
                <div className={styles.experienceInfo}>
                  <h3 className={styles.experienceTitle}>{exp.title}</h3>
                  <span className={styles.experienceCompany}>{exp.company}</span>
                </div>
                <span className={styles.experiencePeriod}>{exp.period}</span>
              </div>
              {Array.isArray(exp.description) ? (
                <ul className={styles.experienceDescription}>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className={styles.experienceDescription}>{exp.description}</p>
              )}
              <div className={styles.skillTags}>
                {exp.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {index < experiences.length - 1 && (
              <div className={styles.divider}></div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
