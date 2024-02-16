import './App.css';
import Layout from './component/Layout/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Titlebar from './component/Titlebar/Titlebar';
import Sidebar from './component/Sidebar/Sidebar';
import Explorer from './component/Explorer/Explorer';
import BottomBar from './component/BottomBar/BottomBar';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import ContactLinks from './component/ContactLinks/ContactLinks';
import Project from './pages/Projects/Project';
import Tabsbar from './component/Tabsbar/Tabsbar';
import ExperienceCard from './component/ExperienceCard/ExperienceCard';


function App() {
  return (
    <Router>
      <div>
        
        <Layout/>
      </div>
    </Router>
  );
}

export default App;
