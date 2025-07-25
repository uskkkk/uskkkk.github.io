import React, { useState } from 'react';
import '../../styles/Navigator.css'

function Navigator(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <>
      <div className="navigator-container">
        <div className="navigator-title">{props.title}</div>

        <div className={`navigator-menu-box`}>
            {props.menu.map(item => (
              <a key={item.id} onClick={() => handleScroll(item.id)}>{item.label}</a>
            ))}
        </div>

        <div className="navigator-hambuger-toggle" onClick={toggleSidebar}>
          <div className={isOpen ? 'hambuger-top-line active' : 'hambuger-top-line'}></div>
          <div className={isOpen ? 'hambuger-middle-line active' : 'hambuger-middle-line'}></div>
          <div className={isOpen ? 'hambuger-bottom-line active' : 'hambuger-bottom-line'}></div>
        </div>
      </div>

      {/* 사이드바 */}
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        {props.menu.map(item => (
          <a key={item.id} onClick={() => handleScroll(item.id)}>{item.label}</a>
        ))}
      </div>
    </>
  );
}

const handleScroll = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
};

export default Navigator;
