import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import FilesIcon from '../../assets/icons/FilesIcon';
import GithubIcon from '../../assets/icons/GithubIcon';
import CodeIcon from '../../assets/icons/CodeIcon';
import PencilIcon from '../../assets/icons/PencilIcon';
import MailIcon from '../../assets/icons/MailIcon';
import AccountIcon from '../../assets/icons/AccountIcon';
import SettingsIcon from '../../assets/icons/SettingsIcon';

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  // {
  //   Icon: GithubIcon,
  //   path: '/github',
  // },
  {
    Icon: CodeIcon,
    path: '/projects',
  },
  {
    Icon: PencilIcon,
    path: '/experience',
  },
  {
    Icon: MailIcon,
    path: '/contact',
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    path: '/skills',
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className='sidebar'>
      <div className="sidebarTop">
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link to={path} key={path}>
            <div
              className={`iconContainer ${
                location.pathname === path ? 'active' : ''
              }`}
            >
              <Icon
                fill={
                  location.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className="sidebarIcon"
              />
            </div>
          </Link>
        ))}
      </div>
      
      <div className="sidebarBottom">
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className="iconContainer" key={path}>
            <Link to={path}>
              <Icon
                fill={
                  location.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className="sidebarIcon"
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
