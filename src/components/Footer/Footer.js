import React from 'react'
import "./Footer.css";
import githubLogo from "../../assetts/GitHub-Logo.svg";
import linkedinLogo from "../../assetts/LinkedIn-Logo.svg";
// src/assetts/GitHub-Logo.svg
export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="name-container">
        <h4>Danielle Sweeny</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/danielle-sweeny-75b50b84/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/dsweeny1">
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
        <h4>Nicole Forseth</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/nicoleforseth/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/forsethnico">
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
        <h4>Rebecka Hendricks</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/rebecka-hendricks/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/rebeckahendricks">
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
        <h4>Carter Ball</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/carter-ball-01b669160/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/cballrun">
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
        <h4>Alaina Kneiling</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/alaina-noel/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/Alaina-Noel/">
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
        <h4>Sid Mann</h4>
        <div className="links-container">
          <a href="https://linkedin.com/in/sidmann">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/sjmann2">
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
        <h4>Derek Cooper</h4>
        <div className="links-container">
          <a href="https://www.linkedin.com/in/derek-cooper-a8798323a/">
            <img
              className="link-logo"
              src={linkedinLogo}
              alt="LinkedIn logo"
              height="50vh"
            />
          </a>
          <a href="https://github.com/coopercodex">
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
