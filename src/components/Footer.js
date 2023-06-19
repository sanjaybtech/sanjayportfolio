import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css";

function Footer() {
  const openInNewTab = url =>{
    window.open(url, '_black', 'noopener, noreferrer');
  };
  return (
    <div className='footer'>
        <div className='socialMedia'>
       <InstagramIcon onClick={() => openInNewTab('https://www.instagram.com/the_sanjay_behera/')} />
       <LinkedInIcon onClick={() => openInNewTab('https://www.linkedin.com/in/sanjay-behera-in/')} />
        </div>
        <p>&copy; 2022</p>
    </div>
  )
}

export default Footer