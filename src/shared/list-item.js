import React from 'react';
import { NavLink } from 'react-router-dom';

const ListItem = ({ menuOption, onClick }) => {
  return (
    <li className="nav-item" data-testid={ `navigation-${menuOption.name}` }>
      <NavLink exact={menuOption.exact} className="nav-link" to={menuOption.path} data-name={menuOption.name} onClick={onClick} >
        {menuOption.text}
      </NavLink>
    </li>
  );
}

export default ListItem;