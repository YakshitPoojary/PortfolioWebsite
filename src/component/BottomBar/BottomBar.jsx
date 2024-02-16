import React from 'react';
import ErrorIcon from '../../assets/icons/ErrorIcon';
import WarningIcon from '../../assets/icons/WarningIcon';
import BellIcon from '../../assets/icons/BellIcon';
import CheckIcon from '../../assets/icons/CheckIcon';
import SourceControlIcon from '../../assets/icons/SourceControlIcon';
import NextjsIcon from '../../assets/icons/NextjsIcon';
import "./BottomBar.css";

const BottomBar = () => {
  return (
    <div className="bottomBar">
      <div className="container">
        <a
          href="https://github.com/YakshitPoojary/PortfolioWebsite"
          target="_blank"
          rel="noreferrer noopener"
          className="section"
        >
          <SourceControlIcon className="icon" />
          <p>main</p>
        </a>
        <div className="section">
          <ErrorIcon className="icon" />
          <p className="errorText">0</p>&nbsp;&nbsp;
          <WarningIcon className="icon" />
          <p>0</p>
        </div>
      </div>
      <div className="container">
        {/* <div className="section">
          <NextjsIcon className="icon" />
          <p>Powered by Next.js</p>
        </div> */}
        <div className="section prettier">
          <CheckIcon className="icon" />
          <p>Prettier</p>
        </div>
        <div className="section">
          <BellIcon />
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
