import React, {Component} from 'react';
import './stages.css';
import Stage from './stage.jsx';

export default class Stages extends Component {
    render() {
        return (
            <div className='stages'>
                {this.props.stages.map((stage, index) => (
                    <Stage stage={stage} index={index} key={stage.title + String(index)}/>
                ))}
            </div>
        );
    }
}

