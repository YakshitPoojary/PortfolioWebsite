import React from 'react';
import './ContactLinks.css';

const contactItems = [
  {
    social: 'website',
    link: 'yakshitpoojary.com',
    href: '',
  },
  {
    social: 'email',
    link: 'yakshitpoojary2004@gmail.com',
    href: 'mailto:yakshitpoojary2004@gmail.com',
  },
  {
    social: 'github',
    link: 'YakshitPoojary',
    href: 'https://github.com/YakshitPoojary',
  },
  {
    social: 'linkedin',
    link: 'Yakshit Poojary',
    href: 'https://www.linkedin.com/in/yakshit-poojary-5957a524b/',
  },
];

const ContactLinks = () => {
    return (
        <div className='code'>
          <p className='line'>
            <span className='className'>.socials</span> <span className='bracket'>&#123;</span>
          </p>
          {contactItems.slice(0, 4).map((item, index) => (
            <p className='line' key={index}>
              &nbsp;&nbsp;&nbsp;<span className='titles'>{item.social}:{' '}</span>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.link}
              </a>
              ;
            </p>
          ))}
          {/* {contactItems.slice(8, contactItems.length).map((item, index) => (
            <p className='line' key={index}>
              &nbsp;&nbsp;{item.social}:{' '}
              <a href={item.href} target="_blank" rel="noopener">
                {item.link}
              </a>
              ;
            </p>
          ))} */}
          <p className='line bracket'>&#125;</p>
        </div>
    );
}

export default ContactLinks