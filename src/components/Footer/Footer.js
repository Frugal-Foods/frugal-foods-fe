import React from 'react'
import "./Footer.css";
import githubLogo from "../../assetts/GitHub-Logo.svg";
import linkedinLogo from "../../assetts/LinkedIn-Logo.svg";
// src/assetts/GitHub-Logo.svg
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="name-container">
        <h4 className='student-name'>Danielle Sweeny</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/danielle-sweeny-75b50b84/" target="_blank" rel="noreferrer">
            <img
              className="link-logo" 
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/dsweeny1" target="_blank" rel="noreferrer">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
      </div>
      <div className="name-container">
        <h4 className='student-name'>Nicole Forseth</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/nicoleforseth/" target="_blank" rel="noreferrer">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/forsethnico" target="_blank" rel="noreferrer">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
      </div>
      <div className="name-container">
        <h4 className='student-name'>Rebecka Hendricks</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/rebecka-hendricks/" target="_blank" rel="noreferrer">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/rebeckahendricks" target="_blank" rel="noreferrer">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
      </div>
      <div className="name-container">
        <h4 className='student-name'>Carter Ball</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/carter-ball-01b669160/" target="_blank" rel="noreferrer">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/cballrun" target="_blank" rel="noreferrer">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
      </div>
      <div className="name-container">
        <h4 className='student-name'>Alaina Kneiling</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/alaina-noel/" target="_blank" rel="noreferrer">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/Alaina-Noel/" target="_blank" rel="noreferrer">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
      </div>
      <div className="name-container">
        <h4 className='student-name'>Sid Mann</h4>
        <div className="links-container">
          <a href="https://linkedin.com/in/sidmann" target="_blank" rel="noreferrer">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/sjmann2" target="_blank" rel="noreferrer">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
      </div>
      <div className="name-container">
        <h4 className='student-name'>Derek Cooper</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/derek-cooper-a8798323a/" target="_blank" rel="noreferrer">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/coopercodex" target="_blank" rel="noreferrer">
            <img
              className="link-logo"
              src={githubLogo}
              alt="GitHub logo"
              height="50vh"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
