import { useState } from 'react';
import { Mail, Github } from 'lucide-react';
import { contactInfo } from '../../../data';
import Section from '../../common/Section';
import GradientText from '../../common/GradientText';
import styles from './Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact" variant="alt">
      <h2 className={styles.sectionTitle}>
        <GradientText>Contact</GradientText>
      </h2>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h3>Get In Touch</h3>
          <p>{contactInfo.description}</p>
          <div className={styles.contactItems}>
            <div className={styles.contactItem}>
              <Mail size={20} />
              <span>{contactInfo.email}</span>
            </div>
            <div className={styles.contactItem}>
              <Github size={20} />
              <span>{contactInfo.github}</span>
            </div>
          </div>
        </div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="이름"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="이메일"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="메시지"
            rows="5"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit" className={styles.submitBtn}>
            전송하기
          </button>
        </form>
      </div>
    </Section>
  );
}

export default Contact;
