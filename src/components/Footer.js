import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const ObfuscatedMailtoLink = ({ user, domain, children }) => {
  const email = `${user}@${domain}`;
  const mailtoLink = `mailto:${email}`;

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = mailtoLink;
  };

  return (
    <a 
      href="#" 
      onClick={handleClick} 
      title={`Email ${email}`}
    >
      {children || email}
    </a>
  );
};

const Footer = () => {
  const emailUser = "alexander.j.bloom925";
  const emailDomain = "gmail.com";

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Get In Touch</h3>
            <p>I'm always interested in new opportunities and collaborations.</p>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <ObfuscatedMailtoLink user={emailUser} domain={emailDomain}>
                  <span>{`${emailUser}@${emailDomain}`}</span>
                </ObfuscatedMailtoLink>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>+1 (804) 528-8540</span>
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://github.com/Dukky0" className="social-link">
                <Github />
              </a>
              <a href="https://linkedin.com/in/alexander-bloom-359673289/" className="social-link">
                <Linkedin />
              </a>
              <ObfuscatedMailtoLink user={emailUser} domain={emailDomain}>
                <Mail />
              </ObfuscatedMailtoLink>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Alexander Bloom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;