import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tab.css';

const Tab = ({ icon, filename, path }) => {
  return (
    <NavLink
      to={path}
      activeClassName='tabActive'
      className='tab'
    >
      <img src={icon} alt={filename} height={18} width={18} />
      <p>{filename}</p>
    </NavLink>
  );
};

export default Tab;
