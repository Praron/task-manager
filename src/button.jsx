import React from 'react';
import './button.css';

const Button = (props) => (
    <div className='button' onClick={props.onClick}>
        <span>{props.text}</span>
    </div>
)

export default Button;

