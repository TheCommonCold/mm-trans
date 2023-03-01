import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';

function Feature(props) {
    const width = window.innerWidth;

    if (props.id % 2 === 0 && width > 768)
        return (
            <Row>
                <div className='anchor' id={props.title}></div>
                <Col md='7'>
                    <h1 className='feature-title'>{props.title}</h1>
                    <p className='feature-text'>{props.text}</p>
                </Col>
                <Col md='5'>
                    <img className="featurette-image" data-src="holder.js/400x400/auto" alt="" src={props.img} data-holder-rendered="true" />
                </Col>
                <hr />
            </Row>
        );
    return (
        <Row>
            <div className='anchor' id={props.title}></div>
            <Col md='5'>
                <img className="featurette-image" data-src="holder.js/400x400/auto" alt="" src={props.img} data-holder-rendered="true" />
            </Col>
            <Col md='7'>
                <h1 className='feature-title'>{props.title}</h1>
                <p className='feature-text'>{props.text}</p>
            </Col>
            <hr />
        </Row>
    );
}

export default Feature;
