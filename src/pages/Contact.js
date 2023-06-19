import React from 'react';
import "../styles/Contact.css";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
  return (
    <div>
    <div className='contact-heading'>
    <h1>Contact</h1>
    </div>
    <div className='contact-info'>
    <h3><PhoneIcon/> : 8280178761</h3>
    <h3><EmailIcon/> : sanjay321.sb@gmail.com</h3>
    </div>
    </div>
  )
}

export default Contact