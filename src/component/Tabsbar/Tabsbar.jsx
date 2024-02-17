import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Tabsbar.css';
import reactIcon from '../../assets/react_icon.svg';
import htmlIcon from '../../assets/html_icon.svg';
import cssIcon from '../../assets/css_icon.svg';
import jsIcon from '../../assets/js_icon.svg';
import jsonIcon from '../../assets/json_icon.svg';
import markdownIcon from '../../assets/markdown_icon.svg';
import { Link } from 'react-router-dom';

const Tabsbar = () => {
  const location = useLocation();

  return (
    <div className='tabs'>
      <NavLink
        to='/'
        className={`tab ${
          location.pathname === '/' || '' ? 'tabActive' : ''
        }`}
      >
        <img src={reactIcon} alt='home.jsx' height={18} width={18} />
        <p>home.jsx</p>
      </NavLink>
      
      <NavLink
        to='/about'
        className={`tab ${
          location.pathname === '/about' ? 'tabActive' : ''
        }`}
      >
        <img src={htmlIcon} alt='about.html' height={18} width={18} />
        <p>about.html</p>
      </NavLink>

      <NavLink
        to='/contact'
        className={`tab ${
          location.pathname === '/contact' ? 'tabActive' : ''
        }`}
      >
        <img src={cssIcon} alt='contact.css' height={18} width={18} />
        <p>contact.css</p>
      </NavLink>

      <NavLink
        to='/projects'
        className={`tab ${
          location.pathname === '/projects' ? 'tabActive' : ''
        }`}
      >
        <img src={jsIcon} alt='projects.js' height={18} width={18} />
        <p>projects.js</p>
      </NavLink>

      <NavLink
        to='/experience'
        className={`tab ${
          location.pathname === '/experience' ? 'tabActive' : ''
        }`}
      >
        <img src={jsonIcon} alt='experience.json' height={18} width={18} />
        <p>experience.json</p>
      </NavLink>

      <NavLink
        to='/skills'
        className={`tab ${
          location.pathname === '/skills' ? 'tabActive' : ''
        }`}
      >
        <img src={markdownIcon} alt='skills.md' height={18} width={18} />
        <p>skills.md</p>
      </NavLink>
    </div>
  );
};

export default Tabsbar;
