import {useState,useEffect} from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import navIcon1 from '../assests/img/nav-icon1.png';
import navIcon2 from '../assests/img/nav-icon2.png';
import navIcon3 from '../assests/img/nav-icon3.png';

const Header = () => {
    const [activeLink,setActiveLink]=useState('home');
    const[scrolled, sescrolled]=useState(false);

    useEffect(() =>{
        const onScroll =() => {
            if(window.scrollY >50){
                sescrolled(true);
            }else{
                sescrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

    }, [])
       const onUpdateActiveLink =(value) => {
        setActiveLink(value);
       }
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"  className={activeLink ==='skills' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"  className={activeLink ==='projects' ? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
           
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://in.linkedin.com/"><img src={navIcon1} alt=""/></a>
                <a href="https://github.com/Sivadeep30"><img src={navIcon2} alt=""/></a>
                <a href="https://www.instagram.com/"><img src={navIcon3} alt=""/></a>

            </div>
            <button className="vvd" onClick={()=> console.log('connect')}>Let's connect</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header

