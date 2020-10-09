import React from 'react';
import CarouselContainer from './carousel'
import {
    Jumbotron,
    Button,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
} from 'reactstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function SubCard(props) {
    console.log(props)
    if (props.link)
        return (
            <div className='shadow p-1 m-1'>
                <Link to={props.link}>
                    {props.circle && <img className='rounded-circle w-75' top src={props.img} alt="Card image cap" />}
                    {!props.circle && <img className='w-100' top src={props.img} alt="Card image cap" />}
                    <h3 className='font-weight-light'>
                        {props.title}
                    </h3>
                    <p>
                        {props.text}
                    </p>
                </Link>
            </div>
        );
    return (
        <div className='shadow p-1 m-1'>
            {props.circle && <img className='rounded-circle w-75' top src={props.img} alt="Card image cap" />}
            {!props.circle && <img className='w-100' top src={props.img} alt="Card image cap" />}
            <h3 className='font-weight-light'>
                {props.title}
            </h3>
            <p>
                {props.text}
            </p>
        </div>
    );
}

export default SubCard;
