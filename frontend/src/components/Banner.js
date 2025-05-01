import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assests/img/header-img.svg";

const Banner = () => {
    // State variables for managing text animation
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["       Software Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    // Effect hook to handle text animation and interval updates
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        // Cleanup interval on component unmount or dependency change
        return () => {
            clearInterval(ticker);
        };
    }, [text, delta, loopNum]);  // Adding 'text', 'delta', and 'loopNum' to the dependency array

    // Function to handle the text updating (typing and deleting)
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting 
            ? fullText.substring(0, text.length - 1) 
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        // If deleting, reduce the typing speed
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        // Switch to deleting mode when the text is fully typed
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);  // Slow down when deleting
        } 
        // If deleting is complete, reset the state and start with the next text
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);  // Speed up after deletion
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi I'm Sivadeep`}<span className="wrap">{text}</span></h1>
                        <p></p>
                        <button onClick={() => window.open(process.env.PUBLIC_URL + "/22CSR198_Sivadeep N.pdf", "_blank")}>
                            Resume <ArrowRightCircle size={25} />
                        </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
