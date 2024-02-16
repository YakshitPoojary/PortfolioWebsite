import React from 'react';
import { Link } from 'react-router-dom';
// import Illustration from '../../component/Illustration';
import './Home.css';
import myimage from '../../assets/myimage.jpg'

const Home = () => {
  return (
    <>
      <div className='homeContainer'>
        <div className='homeBackground'>
          <h1>HELLO</h1>
          <h1>WORLD!</h1>
        </div>
        <div className='homeForeground'>
          <div className='homeContent'>
            <h1 className='homeName'>Yakshit Poojary</h1>
            <h6 className='homeBio'>// Computer Engineer</h6>
            <h6 className='homeBio'>// Web Developer</h6>
            <Link to="/projects">
              <button className='homeButton'>View Work</button>
            </Link>
            <Link to="/contact">
              <button className='homeOutlined'>Contact Me</button>
            </Link>
          </div>
          {/* <Illustration className='homeIllustration'/> */}
          <img src={myimage} alt="mypic" className='homeIllustration'/>
        </div>
      </div>
    </>
  );
}

export default Home;
