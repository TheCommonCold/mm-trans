import React from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
} from 'reactstrap';
import SubCard from './subCard';
import Feature from './feature';
import StartData from '../data/start.json'
import logo from '../logo.png'

function Start() {
    function renderRow(index, cards, circle, link) {
        return (
            <Row key={index} className='text-center'>
                {cards.map((card, index) => {
                    return <Col key={index}><SubCard title={card.title} circle={circle} img={card.img} link={link} /></Col>
                })}
            </Row>)
    }
    return (
        <div>
            {/* <CarouselContainer /> */}
            <div id='main-img' className="sticky-top sticky">
                <div className="row align-items-center h-100 text-center">
                    <div className='w-100'>
                        <img className='w-50' src={logo} alt='img'></img>
                        <h1 className=''>Mariusz Grygier - Marcin Grygier</h1>
                        <h2 className='font-italic'>est. 1998</h2>
                    </div>
                </div>
            </div>
            {StartData.map((section, index) => {
                return (
                    <div key={index} className="divider">
                        <Jumbotron className='m-0 p-5 fades'>
                            <Container className='bg-light shadow p-5'>
                                <Row>
                                    <Feature id={index} title={section.title} img={section.img} text={section.text} />
                                </Row>
                                <hr />
                                {section.rows.map((row, index) => renderRow(index, row, section.circle, section.link))}
                            </Container>
                        </Jumbotron>
                    </div>
                )
            })}
            <div className="divider"></div>
        </div>
    );
}

export default Start;
