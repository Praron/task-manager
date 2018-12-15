import React from 'react';
import './stage.css';
import Button from './button.jsx';
import store, {moveTask} from './store';


const Stage = ({stage, index}) => (
    <div className='stage'>
        <div className='stage-name'>
            {stage.title}
        </div>
        <div className='task-list'>
            {stage.tasks.map((task, i) => <span key={task + String(i)}>{task}</span>)}
        </div>
        <Button text='Перевести верхнюю задачу на следующую стадию' onClick={() => store.dispatch(moveTask(index))}/>
    </div>
)

export default Stage;

