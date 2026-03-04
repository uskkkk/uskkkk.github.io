import styles from './Navigator.module.css';

function Sidebar({ menu, isOpen, onItemClick, onClose }) {
  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.show : ''}`}>
        <div className={styles.sidebarContent}>
          {menu.map(item => (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={styles.sidebarLink}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      {isOpen && <div className={styles.overlay} onClick={onClose} />}
    </>
  );
}

export default Sidebar;
