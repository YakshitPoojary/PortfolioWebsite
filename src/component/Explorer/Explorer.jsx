import React, { useState } from 'react';
import './Explorer.css';
import { Link } from 'react-router-dom';
import ChevronRight from '../../assets/icons/ChevronRight';
import reactIcon from '../../assets/react_icon.svg';
import htmlIcon from '../../assets/html_icon.svg';
import cssIcon from '../../assets/css_icon.svg';
import jsIcon from '../../assets/js_icon.svg';
import markdownIcon from '../../assets/markdown_icon.svg';
import jsonIcon from '../../assets/json_icon.svg';

const explorerItems = [
    {
      name: 'home.jsx',
      path: '/',
      icon: reactIcon,
    },
    {
      name: 'about.html',
      path: '/about',
      icon: htmlIcon,
    },
    {
      name: 'contact.css',
      path: '/contact',
      icon: cssIcon,
    },
    {
      name: 'projects.js',
      path: '/projects',
      icon: jsIcon,
    },
    {
      name: 'experience.json',
      path: '/experience',
      icon: jsonIcon,
    },
    {
      name: 'skills.md',
      path: '/skills',
      icon: markdownIcon,
    },
];

const Explorer = () => {
    const [portfolioOpen, setPortfolioOpen] = useState(true);
    return (
        <div className="explorer">
            <p className="title">Explorer</p>
            <div>
                <input
                    type="checkbox"
                    className="checkbox"
                    id="portfolio-checkbox"
                    checked={portfolioOpen}
                    onChange={() => setPortfolioOpen(!portfolioOpen)}
                />
                <label htmlFor="portfolio-checkbox" className="heading">
                    <ChevronRight
                        className="chevron"
                        style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
                    />
                    Portfolio
                </label>
                <div className="files" style={portfolioOpen ? { display: 'block' } : { display: 'none' }}>
                    {explorerItems.map((item, index) => (
                        <Link to={item.path} key={index}>
                            <div className="file">
                                <img src={item.icon} alt={item.name} height={18} width={18} />
                                <p>{item.name}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Explorer;
