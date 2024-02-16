import React from 'react';
import Titlebar from '../Titlebar/Titlebar';
import Sidebar from '../Sidebar/Sidebar';
import BottomBar from '../BottomBar/BottomBar';
import Explorer from '../Explorer/Explorer';
import Tabsbar from '../Tabsbar/Tabsbar';
import './Layout.css';
// import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home.jsx';
import Contact from '../../pages/Contact/Contact.jsx';
import Project from '../../pages/Projects/Project.jsx';
import About from '../../pages/About/About.jsx';
import Experience from '../../pages/Experience/Experience.jsx';


const Layout = () => {

    return (
      <>
        <Titlebar />
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
              </Routes>
            </div>
          </div>
        </div>
        <BottomBar/>
      </>
    )
}

export default Layout;
