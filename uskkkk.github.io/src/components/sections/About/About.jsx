import { Code, Palette, Globe } from 'lucide-react';
import { aboutCards } from '../../../data';
import Section from '../../common/Section';
import GradientText from '../../common/GradientText';
import styles from './About.module.css';

const iconMap = {
  Code,
  Palette,
  Globe
};

function About() {
  return (
    <Section id="about" variant="alt">
      <h2 className={styles.sectionTitle}>
        <GradientText>About Me</GradientText>
      </h2>
      <div className={styles.aboutGrid}>
        {aboutCards.map((card, index) => {
          const IconComponent = iconMap[card.icon];
          return (
            <div key={index} className={styles.aboutCard}>
              <div className={styles.cardIcon}>
                <IconComponent size={32} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default About;
