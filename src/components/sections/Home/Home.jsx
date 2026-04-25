import { Github, Mail } from 'lucide-react';
import { profileInfo, socialLinks } from '../../../data';
import logo from '../../../assets/img/my_photo.jpg';
import styles from './Home.module.css';

function Home() {
  const { name, education } = profileInfo;

  return (
    <section id="home" className={styles.homeSection}>
      <div className={styles.homeLayout}>

        {/* Left: photo + role + name */}
        <div className={styles.homeLeft}>
          <img src={logo} alt="프로필" className={styles.profileImage} />
          <p className={styles.roleLabel}>Software Engineer</p>
          <h1 className={styles.homeTitle}>{name}</h1>
        </div>

        {/* Right: edu props + links */}
        <div className={styles.homeRight}>
          <div className={styles.homeProps}>
            <div className={styles.propRow}>
              <span className={styles.propLabel}>학력</span>
              <span className={styles.propValue}>{education.school}</span>
            </div>
            <div className={styles.propRow}>
              <span className={styles.propLabel}>전공</span>
              <span className={styles.propValue}>{education.major}</span>
            </div>
            <div className={styles.propRow}>
              <span className={styles.propLabel}>학위</span>
              <span className={styles.propValue}>{education.degree}</span>
            </div>
          </div>
          <div className={styles.socialLinks}>
            <a href={socialLinks.github} className={styles.socialLink}>
              <Github size={14} />
              <span>GitHub</span>
            </a>
            <a href={socialLinks.email} className={styles.socialLink}>
              <Mail size={14} />
              <span>Email</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Home;
