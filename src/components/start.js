import React from 'react';
import CarouselContainer from './carousel'
import {
    Jumbotron,
    Container,
    Row,
    Col,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from 'reactstrap';
import SubCard from './subCard';
import Feature from './feature';
import StartData from '../data/start.json'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from '../logo.png'

function Start() {
    function renderRow(cards, circle, link) {
        return (
            <Row className='text-center'>
                {cards.map(card => {
                    return <Col><SubCard title={card.title} circle={circle} img={card.img} link={link} /></Col>
                })}
            </Row>)
    }
    return (
        <div>
            {/* <CarouselContainer /> */}
            <div id='main-img' className="sticky-top sticky">
                <div class="row align-items-center h-100 text-center">
                    <div className='w-100'>
                        <img className='w-50' src={logo}></img>
                        <h1 className=''>Mariusz Grygier - Marcin Grygier</h1>
                        <h2 className='font-italic'>est. 1998</h2>
                    </div>
                </div>
            </div>
            {StartData.map((section, index) => {
                return (
                    <div class="divider">
                        <Jumbotron className='m-0 p-5 fades'>
                            <Container className='bg-light shadow p-5'>
                                <Row>
                                    <Feature id={index} title={section.title} img={section.img} text={section.text} />
                                </Row>
                                <hr />
                                {section.rows.map(row => renderRow(row, section.circle, section.link))}
                            </Container>
                        </Jumbotron>
                    </div>
                )
            })}
            <div class="divider"></div>
        </div>
    );
}

export default Start;
