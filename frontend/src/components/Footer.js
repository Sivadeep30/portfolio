import { Container } from "react-bootstrap";
import navIcon1 from "../assests/img/nav-icon1.png";
import navIcon2 from "../assests/img/nav-icon2.png";
import navIcon3 from "../assests/img/nav-icon3.png";
import "../assests/Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="social-icon">
          <a href="#"><img src={navIcon1} alt="Icon" /></a>
          <a href="#"><img src={navIcon2} alt="Icon" /></a>
          <a href="#"><img src={navIcon3} alt="Icon" /></a>
        </div>
        <p>© 2025 Sivadeep. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
