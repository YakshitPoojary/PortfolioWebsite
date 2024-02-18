import React from 'react';
// import html from '../../assets/icons/html.png';
// import css from '../../assets/icons/css.png';
// import java from '../../assets/icons/java.png';
// import python from '../../assets/icons/python.png';
// import javascript from '../../assets/icons/javascript.png';
// import react from '../../assets/icons/react.png';
// import spring from '../../assets/icons/spring.png';
// import sql from '../../assets/icons/sql.png';
// import php from '../../assets/icons/php.png';
// import c from '../../assets/icons/c.png';

import { DiHtml5, DiCss3, DiJava, DiPython, DiJavascript1, DiReact, DiDatabase, DiPhp, DiJqueryLogo  } from "react-icons/di";
import { DiDjango } from "react-icons/di";
import { BsCCircle } from "react-icons/bs";
import { SiCplusplus } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import './Skills.css';

const Skills = () => {
  return (
    <div className='skillsContainer'>
        <p className='webIcons'>
            <div className="iconWithText">
              <DiHtml5 className='skillsImage' size={80} />
              <span className="iconText">HTML</span>
            </div>

            <div className="iconWithText">
              <DiCss3 className='skillsImage' size={80} />
              <span className='iconText'>CSS</span>
            </div>
            
            <div className="iconWithText">
              <DiJavascript1 className='skillsImage' size={80} />
              <span className='iconText'>Javascript</span>      
            </div>

            <div className="iconWithText">
              <DiReact className='skillsImage' size={80} />
              <span className='iconText'>React.js</span>
            </div>

            <div className="iconWithText">
              <DiPhp className='skillsImage' size={80} />
              <span className='iconText'>PHP</span>
            </div>

            <div className="iconWithText">
              <DiJqueryLogo className='skillsImage' size={80} />
              <span className='iconText'>jQuery</span>
            </div>

            <div className="iconWithText">
              <DiDatabase className='skillsImage' size={80} />
              <span className='iconText'>SQL</span>
            </div>

            <div className="iconWithText">
              <DiDjango className='skillsImage' size={80} />
              <span className='iconText'>Django</span>
            </div>

            <div className="iconWithText">
              <FaNodeJs className='skillsImage' size={80} />
              <span className='iconText'>Node.js</span>
            </div>
        </p>

        <p className="languageIcons">

          <div className="iconWithText">
            <DiJava className='skillsImage' size={80} />
            <span className='iconText'>Java</span>
          </div>
          
          <div className="iconWithText">
            <DiPython className='skillsImage' size={80} />
            <span className='iconText'>Python</span>
          </div>

          <div className="iconWithText">
            <BsCCircle className='skillsImage' size={80}/>
            <span className='iconText'>C</span>
          </div>

          <div className="iconWithText">
            <SiCplusplus className='skillsImage' size={80}/>
            <span className='iconText'>C++</span>
          </div>

          <div className="iconWithText">
            <BiLogoSpringBoot className='skillsImage' size={80}/>
            <span className='iconText'>Spring Boot</span>
          </div>

        </p>
    </div>
  );
};

export default Skills;

