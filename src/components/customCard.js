import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';

function CustomCard(props) {
    if (props.link) {
        return (
            <Link to={props.link + '#' + props.title}>
                <Card className='shadow p-1 m-1'>
                    {props.circle && <CardImg top width="100%" className='rounded-circle' src={props.img} alt="Card cap" />}
                    {!props.circle && <CardImg top width="100%" className='w-100' src={props.img} alt="Card cap" />}
                    <CardBody>
                        <CardTitle>
                            <h3 className='font-weight-light'>
                                {props.title}
                            </h3>
                        </CardTitle>
                        <CardText>
                            {props.text}
                        </CardText>
                    </CardBody>
                </Card>
            </Link>
        );
    }
    return (
        <Card className='shadow p-1 m-1'>
            {props.circle && <CardImg top width="100%" className='rounded-circle' src={props.img} alt="Card cap" />}
            {!props.circle && <CardImg top width="100%" className='w-100' src={props.img} alt="Card cap" />}
            <CardBody>
                <CardTitle>
                    <h3 className='font-weight-light'>
                        {props.title}
                    </h3>
                </CardTitle>
                <CardText>
                    {props.text}
                </CardText>
            </CardBody>
        </Card>
    );
}

export default CustomCard;
