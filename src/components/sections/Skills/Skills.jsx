import { skillCategories } from '../../../data/skills';
import Section from '../../common/Section';
import styles from './Skills.module.css';

function Skills() {
  return (
    <Section id="skill">
      <h2 className={styles.sectionTitle}>Skills</h2>
      <div className={styles.skillCategories}>
        {skillCategories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <div className={styles.categoryHeader}>
              <span className={styles.categoryDot}></span>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
            </div>
            <div className={styles.skillTags}>
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
