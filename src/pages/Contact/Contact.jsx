import React from 'react';
import ContactLinks from '../../component/ContactLinks/ContactLinks';
import './Contact.css';
const Contact = () => {

    return (
        <div className='contactContainer'>
          <div>
            <h3 className='contactHeading'>Reach Out Via Socials</h3>
            <ContactLinks />
          </div>
        </div>
    );
}


export default Contact;