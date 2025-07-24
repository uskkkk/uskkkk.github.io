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
            {props.menu.map((m,i) => (<div key={i} className='navigator-menu'>{m}</div>))}
        </div>

        <div className="navigator-hambuger-toggle" onClick={toggleSidebar}>
          <div className={isOpen ? 'hambuger-top-line active' : 'hambuger-top-line'}></div>
          <div className={isOpen ? 'hambuger-middle-line active' : 'hambuger-middle-line'}></div>
          <div className={isOpen ? 'hambuger-bottom-line active' : 'hambuger-bottom-line'}></div>
        </div>
      </div>

      {/* 사이드바 */}
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        {props.menu.map((m,i) => (<div key={i} className='sidebar-menu'>{m}</div>))}
      </div>
    </>
  );
}

export default Navigator;
