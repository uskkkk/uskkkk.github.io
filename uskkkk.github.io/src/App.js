import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Github, Linkedin, Code, Palette, Database, Globe } from 'lucide-react';
import logo from './assets/img/my_photo.png';

// Navigator Component
function Navigator({ title, menu }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`navigator ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-title">{title}</div>
          <div className="nav-menu">
            {menu.map(item => (
              <a key={item.id} onClick={() => handleScroll(item.id)} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
          <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        <div className="sidebar-content">
          {menu.map(item => (
            <a key={item.id} onClick={() => handleScroll(item.id)} className="sidebar-link">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}

// Home Section
function Home() {
  return (
    <section id="home" className="section home-section">
      <div className="home-content">
        <div className="home-image-wrapper">
          <div className="gradient-ring"></div>
          <div className="profile-image">
            <div className="image-placeholder">
              <img src={logo} alt="my photo" />
            </div>
          </div>
        </div>
        <h1 className="home-title">
          <span className="gradient-text">김우성</span>
        </h1>
        <p className="home-subtitle">Frontend Developer</p>
        <div className="home-info">
          <div className="info-item">
            <span className="info-label">학력</span>
            <span className="info-value">국가평생교육진흥원 학점은행</span>
          </div>
          <div className="info-item">
            <span className="info-label">전공</span>
            <span className="info-value">컴퓨터공학과</span>
          </div>
          <div className="info-item">
            <span className="info-label">학위</span>
            <span className="info-value">학사</span>
          </div>
        </div>
        <div className="social-links">
          <a href="#" className="social-link"><Github size={20} /></a>
          <a href="#" className="social-link"><Linkedin size={20} /></a>
          <a href="#" className="social-link"><Mail size={20} /></a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-content">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-card">
            <div className="card-icon">
              <Code size={32} />
            </div>
            <h3>Development</h3>
            <p>사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성합니다.</p>
          </div>
          <div className="about-card">
            <div className="card-icon">
              <Palette size={32} />
            </div>
            <h3>Design</h3>
            <p>모던하고 직관적인 UI/UX 디자인으로 사용자에게 최상의 경험을 제공합니다.</p>
          </div>
          <div className="about-card">
            <div className="card-icon">
              <Globe size={32} />
            </div>
            <h3>Responsive</h3>
            <p>모든 디바이스에서 완벽하게 작동하는 반응형 웹을 구현합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
function Skill() {
  const skills = [
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 80, category: 'Frontend' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'Node.js', level: 70, category: 'Backend' },
    { name: 'Git', level: 75, category: 'Tools' },
    { name: 'Figma', level: 65, category: 'Design' }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-content">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-category">{skill.category}</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('메시지가 전송되었습니다!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-content">
        <h2 className="section-title">Contact</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            <p>프로젝트 협업이나 문의사항이 있으시면 언제든지 연락주세요.</p>
            <div className="contact-items">
              <div className="contact-item">
                <Mail size={20} />
                <span>your.email@example.com</span>
              </div>
              <div className="contact-item">
                <Github size={20} />
                <span>github.com/yourusername</span>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <input
              type="text"
              placeholder="이름"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input
              type="email"
              placeholder="이메일"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <textarea
              placeholder="메시지"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <button onClick={handleSubmit} className="submit-btn">전송하기</button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main App
function App() {
  const menu = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="app">
      <Navigator title="KWS.DEV" menu={menu} />
      <main>
        <Home />
        <About />
        <Skill />
        <Contact />
      </main>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          background: #ffffff;
          color: #1a1a1a;
          overflow-x: hidden;
        }

        .app {
          min-height: 100vh;
        }

        /* Navigator */
        .navigator {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .navigator.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }

        .nav-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-title {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .nav-menu {
          display: flex;
          gap: 3rem;
        }

        .nav-link {
          color: rgba(0, 0, 0, 0.7);
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link:hover {
          color: #1a1a1a;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .hamburger {
          display: none;
          background: none;
          border: none;
          color: #1a1a1a;
          cursor: pointer;
          padding: 0.5rem;
        }

        /* Sidebar */
        .sidebar {
          position: fixed;
          top: 0;
          right: -100%;
          width: 300px;
          height: 100vh;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          padding: 6rem 2rem;
          transition: right 0.4s ease;
          z-index: 999;
          border-left: 1px solid rgba(0, 0, 0, 0.1);
        }

        .sidebar.show {
          right: 0;
        }

        .sidebar-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .sidebar-link {
          color: rgba(0, 0, 0, 0.7);
          text-decoration: none;
          font-size: 1.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
        }

        .sidebar-link:hover {
          color: #1a1a1a;
          padding-left: 1rem;
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 998;
        }

        /* Sections */
        .section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 6rem 2rem;
          position: relative;
        }

        .section-content {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }

        .section-title {
          font-size: 3rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 4rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Home Section */
        .home-section {
          background: 
            radial-gradient(ellipse at top, rgba(102, 126, 234, 0.08), transparent 50%),
            radial-gradient(ellipse at bottom, rgba(118, 75, 162, 0.08), transparent 50%),
            #ffffff;
        }

        .home-content {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .home-image-wrapper {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto 2rem;
        }

        .gradient-ring {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea, #764ba2);
          animation: rotate 4s linear infinite;
          opacity: 0.4;
        }

        @keyframes rotate {
          100% { transform: rotate(360deg); }
        }

        .profile-image {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #f5f7fa, #e8ecf1);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #ffffff;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          overflow: hidden;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .home-title {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .home-subtitle {
          font-size: 1.5rem;
          color: rgba(0, 0, 0, 0.6);
          margin-bottom: 3rem;
        }

        .home-info {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .info-label {
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.5);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .info-value {
          font-size: 1.125rem;
          color: rgba(0, 0, 0, 0.8);
          font-weight: 500;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
        }

        .social-link {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #f5f7fa;
          border: 1px solid rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(0, 0, 0, 0.6);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
          border-color: transparent;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }

        .scroll-dot {
          width: 6px;
          height: 30px;
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          position: relative;
        }

        .scroll-dot::before {
          content: '';
          position: absolute;
          top: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 8px;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 2px;
          animation: scroll 2s infinite;
        }

        @keyframes scroll {
          0%, 100% { transform: translate(-50%, 0); opacity: 0; }
          50% { transform: translate(-50%, 10px); opacity: 1; }
        }

        /* About Section */
        .about-section {
          background: #fafbfc;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .about-card {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 20px;
          padding: 3rem 2rem;
          text-align: center;
          transition: all 0.4s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .about-card:hover {
          border-color: rgba(102, 126, 234, 0.3);
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(102, 126, 234, 0.15);
        }

        .card-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
          border: 1px solid rgba(102, 126, 234, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667eea;
        }

        .about-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .about-card p {
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.6;
        }

        /* Skills Section */
        .skills-section {
          background: #ffffff;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .skill-card {
          background: #fafbfc;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s ease;
        }

        .skill-card:hover {
          background: #ffffff;
          border-color: rgba(102, 126, 234, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .skill-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .skill-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1a1a1a;
        }

        .skill-category {
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.5);
          background: rgba(0, 0, 0, 0.05);
          padding: 0.25rem 0.75rem;
          border-radius: 12px;
        }

        .skill-bar {
          height: 8px;
          background: rgba(0, 0, 0, 0.08);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 0.75rem;
        }

        .skill-progress {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          border-radius: 10px;
          transition: width 1s ease;
        }

        .skill-level {
          font-size: 0.875rem;
          color: rgba(0, 0, 0, 0.5);
        }

        /* Contact Section */
        .contact-section {
          background: #fafbfc;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #1a1a1a;
        }

        .contact-info p {
          color: rgba(0, 0, 0, 0.6);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: rgba(0, 0, 0, 0.7);
          font-size: 1rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-form input,
        .contact-form textarea {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          padding: 1rem 1.5rem;
          color: #1a1a1a;
          font-size: 1rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: none;
          background: #ffffff;
          border-color: rgba(102, 126, 234, 0.5);
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .contact-form textarea {
          resize: vertical;
          min-height: 150px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
        }

        /* Responsive */
        @media (max-width: 968px) {
          .nav-menu {
            display: none;
          }

          .hamburger {
            display: block;
          }

          .home-title {
            font-size: 3rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .home-info {
            flex-direction: column;
            gap: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .nav-content {
            padding: 1rem 1.5rem;
          }

          .section {
            padding: 4rem 1.5rem;
          }

          .home-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
            margin-bottom: 3rem;
          }

          .about-grid,
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default App;