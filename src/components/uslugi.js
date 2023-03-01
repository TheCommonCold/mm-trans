import React from 'react';
import {
    Jumbotron,
    Container,
    Row,
} from 'reactstrap';
import Feature from './feature';
import StartData from '../data/start.json'

function Uslugi() {
    return (
        <div class="divider">
            {/* <Back /> */}
            <Jumbotron className='m-0 p-5 fades'>
                {StartData[0].rows.map((row, index1) => {
                    return row.map((section, index2) => {
                        return (
                            <Container className='bg-light p-5'>
                                <Row>
                                    <Feature id={index1 + index2} title={section.title} img={section.img} text={section.text} />
                                </Row>
                                <hr />
                            </Container>
                        )
                    })
                })}
            </Jumbotron>
            <div class="divider"></div>
        </div>
    );
}

export default Uslugi;
