import React, {Component} from 'react';
import './stages.css';
import Stage from './stage.jsx';
import store from './store.jsx';

export default class Stages extends Component {
    render() {
        return (
            <div className='stages'>
                {store.getState().stages.map((stage, index) => (
                    <Stage stage={stage} index={index} key={stage.title + String(index)}/>
                ))}
            </div>
        );
    }
}

