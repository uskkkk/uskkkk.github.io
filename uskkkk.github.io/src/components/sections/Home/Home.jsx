import { Github, Linkedin, Mail } from 'lucide-react';
import { profileInfo, socialLinks } from '../../../data';
import GradientText from '../../common/GradientText';
import logo from '../../../assets/img/my_photo.png';
import styles from './Home.module.css';

function Home() {
  const { name, title, education } = profileInfo;

  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.homeContent}>
        <div className={styles.homeImageWrapper}>
          <div className={styles.gradientRing}></div>
          <div className={styles.profileImage}>
            <div className={styles.imagePlaceholder}>
              <img src={logo} alt="프로필" />
            </div>
          </div>
        </div>
        <h1 className={styles.homeTitle}>
          <GradientText>{name}</GradientText>
        </h1>
        <p className={styles.homeSubtitle}>{title}</p>
        <div className={styles.homeInfo}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>학력</span>
            <span className={styles.infoValue}>{education.school}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>전공</span>
            <span className={styles.infoValue}>{education.major}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>학위</span>
            <span className={styles.infoValue}>{education.degree}</span>
          </div>
        </div>
        <div className={styles.socialLinks}>
          <a href={socialLinks.github} className={styles.socialLink}>
            <Github size={20} />
          </a>
          <a href={socialLinks.linkedin} className={styles.socialLink}>
            <Linkedin size={20} />
          </a>
          <a href={socialLinks.email} className={styles.socialLink}>
            <Mail size={20} />
          </a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot}></div>
      </div>
    </section>
  );
}

export default Home;
