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

import { DiHtml5, DiCss3, DiJava, DiPython, DiJavascript1, DiReact, DiDatabase, DiPhp, DiCode, DiJqueryLogo  } from "react-icons/di";
import { BsCCircle } from "react-icons/bs";
import { SiCplusplus } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import './Skills.css';




const Skills = () => {
  return (
    <div className='skillsContainer'>
        <div className='webIcons'>
            <DiHtml5 className='skillsImage' size={80} />
            <DiCss3 className='skillsImage' size={80} />
            <DiJavascript1 className='skillsImage' size={80} />
            <DiReact className='skillsImage' size={80} />
            <DiPhp className='skillsImage' size={80} />
            <DiJqueryLogo className='skillsImage' size={80} />
            <DiDatabase className='skillsImage' size={80} />
        </div>

        <div className="languageIcons">
            <DiJava className='skillsImage' size={80} />
            <DiPython className='skillsImage' size={80} />
            <BsCCircle className='skillsImage' size={80}/>
            <SiCplusplus className='skillsImage' size={80}/>
            <BiLogoSpringBoot className='skillsImage' size={80}/>
        </div>
    </div>
  );
};

export default Skills;

