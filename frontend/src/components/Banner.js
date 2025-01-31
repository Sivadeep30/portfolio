import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assests/img/header-img.svg";

const Banner =() =>{
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi I'm Sivadeep`}<span className="wrap">Web Developer</span></h1>
                        <p> A passionate and driven Computer Science Engineering student, always
 eager to explore and learn new technologies. Strong problem-solving
 skills and a constant desire to improve. Enthusiastic about working on
 innovative projects and embracing challenges. Dedicated to developing
 expertise in software development and emerging tech.</p>
            <button onClick={()=> console.log('connenct')}>Let's connect<ArrowRightCircle size={25}/></button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                      <img src={headerImg} alt="headder Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner

