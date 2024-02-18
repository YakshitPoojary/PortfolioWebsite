import React from 'react';
import './About.css'

const About = () => {
  return (
    
    <div className='aboutContainer'>
      <div className='aboutInfo'>
        <h1>ABOUT ME</h1>
        <div>Hello there! I'm a Third-Year student pursuing Computer Science Engineering at K.J. Somaiya College of Engineering. 
          I have a keen interest in Web Development and recently delved into the world of Machine Learning and App Development</div>
        <p>One of my strengths lies in collaborative work, as I thrive in team settings. 
          Being a quick learner, I adapt swiftly to new challenges, making me versatile in tackling various projects. </p>
      </div>

      <div className='aboutInfo'>
        <h1>EDUCATION</h1>
        <div>Bachelor of Technology in Computer Engineering</div>
        <div>Honours in Cyber Security</div>
        <p>Total CGPA (till Semester 5): 8.51</p>
      </div>

      <a href='https://drive.google.com/file/d/1S97M2DdLP3OaFu0RXS9etud5sRBlML1B/view' target='_blank' rel='noopener noreferrer' className='resume'><h1 className='aboutInfo'>CLICK HERE TO VIEW MY RESUME</h1></a>
    </div>
  )
}

export default About