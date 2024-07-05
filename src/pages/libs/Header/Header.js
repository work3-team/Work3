import React from 'react';
import './Header.css';
import logoImage from './2.png';

const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="logo"> 
          <img src={logoImage} alt="logo" />
        </div>
        <nav>
          <ul>
            <li><a href="/our-story">Our Story</a></li>
            <li><a href="/our-plan">Our Plan</a></li>
            <li><a href="/join-me">Join Me</a></li>
            <li><a href="/more">More</a></li>
          </ul>
        </nav>
        <div class="social">
          <a target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
