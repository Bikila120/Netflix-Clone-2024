import React from 'react';
import "./header.css";
import Netflixlogo from '../.././src/asset/images/Netflixlogo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
const Header = () => {
  return (
    <header className="netflix-header">
    <nav className="netflix-nav">
      <ul className="netflix-nav-list">
      <li><img src={Netflixlogo} alt="Netflixlogo" width="100" /></li>
        <li className="netflix-nav-item">Home</li>
        <li className="netflix-nav-item">TV Shows</li>
        <li className="netflix-nav-item">Movies</li>
        <li className="netflix-nav-item">Latest</li>
        <li className="netflix-nav-item">My List</li>
      </ul>
    </nav>
    <div className='header_right'>
      <ul>
        <li><SearchIcon /></li>
        <li><NotificationsNoneIcon /></li>
        <li><AccountBoxIcon/></li>
        <li><ArrowDropDownCircleIcon/></li>
      </ul>
    </div>
  </header>
  );
};

export default Header;