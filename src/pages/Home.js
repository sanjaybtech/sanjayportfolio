import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";

function home() {
  const openInNewTab = url =>{
    window.open(url, '_black', 'noopener, noreferrer');
  };
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Sanjay</h2>
        <div className='prompt'>
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon onClick={() => openInNewTab('https://www.linkedin.com/in/sanjay-behera-in/')} />
          <EmailIcon onClick={() => openInNewTab('https://mail.google.com/mail/u/0/#inbox')} />
          <GitHubIcon onClick={() => openInNewTab('https://github.com/sanjaybtech')} />
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>React, Redux, Bootstrap, Material UI, CSS, HTML</span>
          </li>
          <li className='item'>
            <h2>Language</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default home