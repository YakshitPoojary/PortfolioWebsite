import React from 'react';
import Titlebar from '../Titlebar/Titlebar';
import Sidebar from '../Sidebar/Sidebar';
import BottomBar from '../BottomBar/BottomBar';
import Explorer from '../Explorer/Explorer';
import Tabsbar from '../Tabsbar/Tabsbar';
import './Layout.css';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home.jsx';
import Contact from '../../pages/Contact/Contact.jsx';
import Project from '../../pages/Projects/Project.jsx';
import About from '../../pages/About/About.jsx';
import Experience from '../../pages/Experience/Experience.jsx';
import Skills from '../../pages/Skills/Skills.jsx';


const Layout = () => {
    
    const location = useLocation();

    const handleMaximize = () => {
      const element = document.getElementById("layoutContainer");
      const isFullScreen = document.fullscreenElement;
      if(!isFullScreen){
        element.requestFullscreen();
      }
    };

    const handleMinimize = () => {
      const isFullScreen = document.fullscreenElement;
      if(isFullScreen){
        document.exitFullscreen();
      }
    };

    const handleClose = () => {
      if (window.confirm("Are you sure you want to close this window?")) {
          window.location.href = "https://www.google.com";
      }
  };
  
  

    return (
      <div id='layoutContainer'>
        <Titlebar handleMaximize={handleMaximize} handleMinimize={handleMinimize} handleClose={handleClose}/>
        <div className='main'>
          <Sidebar />
          <Explorer />
          <div style={{ width: '100%' }}>
            <Tabsbar />
            <div className="layoutContent">
              <Routes>
                <Route path='/*' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/projects' element={<Project/>}/>
                <Route path='/experience' element={<Experience/>}/>
                <Route path='/skills' element={<Skills/>}/>
              </Routes>
            </div>
          </div>
        </div>
        <BottomBar/>
      </div>
    )
}

export default Layout;
