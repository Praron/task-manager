import React, { Component } from 'react';
import Header from './header.jsx';
import Button from './button.jsx';
import Stages from './stages.jsx';
import {Provider} from 'react-redux';
import './App.css';
import store, {addStage, addTask, moveTask} from './store.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stages: []
        }

        this.addStage = this.addStage.bind(this);
        this.addTask = this.addTask.bind(this);
        this.moveTask = this.moveTask.bind(this);
    }

    render() {
        return (
            <Provider store={store}>
                <div className='App'>
                    <Header/>
                    <Stages stages={this.state.stages}/>
                    <div className='buttons'>
                        <Button text='Добавить стадию' onClick={this.addStage}/>
                        <Button text='Добавить задачу' onClick={this.addTask}/>
                    </div>
                </div>
            </Provider>
        );
    }

    addStage() {
        const title = prompt('Введите название стадии');
        store.dispatch(addStage(title));
    }

    addTask() {
        const task = prompt('Введите название задачи');
        store.dispatch(addTask(task));
    }

    moveTask(stagePosition) {
        store.dispatch(moveTask(stagePosition));
    }
}

export default App;

