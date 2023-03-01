import React, { useRef } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import CustomCard from "./customCard";
import { FaArrowDown } from "react-icons/fa";
import Feature from "./feature";
import StartData from "../data/start.json";
import logo from "../logo.png";

function Start() {

  const ref = useRef(null);

  const handleClick = () => {
    return ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  function renderRow(index, cards, circle, link) {
    return (
      <Row key={index} className="text-center">
        {cards.map((card, index) => {
          return (
            <Col className="p-2" key={index}>
              <CustomCard
                title={card.title}
                circle={circle}
                img={card.img}
                link={link}
              />
            </Col>
          );
        })}
      </Row>
    );
  }

  return (
    <div style={{position: "relative", zIndex:-1}}>
      <div id="main-img" className="sticky-top sticky">
        <div className="row align-items-center h-100 text-center">
          <div className="w-100 mb-5">
            <img className="w-50" src={logo} alt="img"></img>
            <div className="under-text">
              <h1 className="">Mariusz Grygier - Marcin Grygier</h1>
            </div>
            <h2 className="font-italic">est. 1998</h2>
            <span className="arrow" onClick={handleClick}>
              <FaArrowDown className="mt-4" size={30} />
            </span>
          </div>
        </div>
      </div>
      <span ref={ref} className="main">
        {StartData.map((section, index) => {
          return (
            <div key={index} className="divider">
              <Jumbotron className="m-0 fades">
                <Container className="bg-light shadow p-5">
                  <Row>
                    <Feature
                      id={index}
                      title={section.title}
                      img={section.img}
                      text={section.text}
                    />
                  </Row>
                  <hr />
                  {section.rows.map((row, index) =>
                    renderRow(index, row, section.circle, section.link)
                  )}
                </Container>
              </Jumbotron>
            </div>
          );
        })}
        <div className="divider"></div>
      </span>
    </div>
  );
}

export default Start;
