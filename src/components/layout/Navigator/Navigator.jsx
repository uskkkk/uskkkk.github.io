import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import { useScrollNavigation } from '../../../hooks/useScrollNavigation';
import Sidebar from './Sidebar';
import styles from './Navigator.module.css';

function Navigator({ title, menu }) {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrollPosition(50);
  const scrollToSection = useScrollNavigation();

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navigator} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContent}>
          <div className={styles.navTitle}>{title}</div>
          <div className={styles.navMenu}>
            {menu.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={styles.navLink}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </div>
          <button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <Sidebar
        menu={menu}
        isOpen={isOpen}
        onItemClick={handleNavClick}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}

export default Navigator;
