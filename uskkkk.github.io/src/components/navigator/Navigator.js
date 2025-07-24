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

        <div className={`navigator-menu-box ${isOpen ? 'hidden' : ''}`}>
          <div className="navigator-menu">{props.home}</div>
          <div className="navigator-menu">{props.skill}</div>
          <div className="navigator-menu">{props.contact}</div>
        </div>

        <div className="navigator-hambuger-toggle" onClick={toggleSidebar}>
          <div className={isOpen ? 'hambuger-top-line active' : 'hambuger-top-line'}></div>
          <div className={isOpen ? 'hambuger-middle-line active' : 'hambuger-middle-line'}></div>
          <div className={isOpen ? 'hambuger-bottom-line active' : 'hambuger-bottom-line'}></div>
        </div>
      </div>

      {/* 사이드바 */}
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        <div className="sidebar-menu">{props.home}</div>
        <div className="sidebar-menu">{props.skill}</div>
        <div className="sidebar-menu">{props.contact}</div>
      </div>
    </>
  );
}

export default Navigator;
