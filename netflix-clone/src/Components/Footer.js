import React from 'react'
import "./footer.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <footer class="netflix-footer">
  <div class="container">
    <div class="row">
      <div class="footer-column">
        <h3>Company</h3>
        <ul>
          <li>About</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div class="footer-column">
        <h3>Help</h3>
        <ul>
          <li>Support</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </div> 
      <div class="footer-column">
        <h3>Follow Us</h3>
        <ul>
          <li><FacebookRoundedIcon/></li>
          <li><XIcon/></li>
          <li><InstagramIcon/></li>
          <li><YouTubeIcon/></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  )
}
export default Footer