import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assests/img/header-img.svg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  // Use useCallback and move the toRotate array inside the callback
  const tick = useCallback(() => {
    const toRotate = ["       Software Engineer"]; // Moved inside useCallback
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text, period]); // Dependencies are loopNum, isDeleting, text, and period

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, tick]); // Run useEffect when delta or tick changes

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>
              {`Hi I'm Sivadeep`} <span className="wrap">{text}</span>
            </h1>
            <p></p>
            <button onClick={() => window.open("/22CSR198_Sivadeep N.pdf", "_blank")}>
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
