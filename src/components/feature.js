import React from 'react';
import {
    Row,
    Col,
} from 'reactstrap';

function Feature(props) {
    if (props.id % 2 === 0)
        return (
            <Row>
                <div className='anchor' id={props.title}></div>
                <Col xs='7'>
                    <h1 className='feature-title'>{props.title}</h1>
                    <p className='feature-text'>{props.text}</p>
                </Col>
                <Col xs='5'>
                    <img className="featurette-image" data-src="holder.js/400x400/auto" alt="" src={props.img} data-holder-rendered="true" />
                </Col>
                <hr />
            </Row>
        );
    return (
        <Row>
            <div className='anchor' id={props.title}></div>
            <Col xs='5'>
                <img className="featurette-image" data-src="holder.js/400x400/auto" alt="" src={props.img} data-holder-rendered="true" />
            </Col>
            <Col xs='7'>
                <h1 className='feature-title'>{props.title}</h1>
                <p className='feature-text'>{props.text}</p>
            </Col>
            <hr />
        </Row>
    );
}

export default Feature;
