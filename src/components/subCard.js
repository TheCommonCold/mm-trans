import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';

function SubCard(props) {
    if (props.link) {
        return (
            <Link to={props.link + '#' + props.title}>
                <div className='shadow p-1 m-1'>
                    {props.circle && <img className='rounded-circle w-75' src={props.img} alt="Card cap" />}
                    {!props.circle && <img className='w-100' src={props.img} alt="Card cap" />}
                    <h3 className='font-weight-light'>
                        {props.title}
                    </h3>
                    <p>
                        {props.text}
                    </p>
                </div>
            </Link>
        );
    }
    return (
        <div className='shadow p-1 m-1'>
            {props.circle && <img className='rounded-circle w-75' src={props.img} alt="Card cap" />}
            {!props.circle && <img className='w-100' src={props.img} alt="Card cap" />}
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
