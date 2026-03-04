import { skills } from '../../../data';
import Section from '../../common/Section';
import GradientText from '../../common/GradientText';
import styles from './Skills.module.css';

function Skills() {
  return (
    <Section id="skills">
      <h2 className={styles.sectionTitle}>
        <GradientText>Skills</GradientText>
      </h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.skillHeader}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillCategory}>{skill.category}</span>
            </div>
            <div className={styles.skillBar}>
              <div
                className={styles.skillProgress}
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className={styles.skillLevel}>{skill.level}%</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
