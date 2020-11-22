import React, { useState, useRef } from 'react';
import ListItem from './list-item';
import routes from './routes';

const Navigation = ({ onClick, navButtonRef }) => {
  const menuRef = useRef(null);
  const [buttonCollapsed, setButtonCollapsed] = useState(true);
  const onClickBtn = () => {
    if (buttonCollapsed) {
      menuRef.current.className = "navbar-collapse collapse show";
    } else {
      menuRef.current.className = "navbar-collapse collapse";
    }
    setButtonCollapsed(!buttonCollapsed);
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Aine Wilson Counselling</a>
      <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarPageLinks"
          ref={ navButtonRef }
          onClick={onClickBtn}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarPageLinks" ref={menuRef}>
        <ul className="navbar-nav ml-auto">
          { routes.map((menuOption, index) => (            
              <ListItem key={index} menuOption={ menuOption } onClick={ onClick } />
            ))
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;