import React, { Component } from 'react';
import './App.css';
import Header from './header.jsx';
import Button from './button.jsx';
import Stages from './stages.jsx';

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
            <div className='App'>
                <Header/>
                <Stages stages={this.state.stages}/>
                <div className='buttons'>
                    <Button text='Добавить стадию' onClick={this.addStage}/>
                    <Button text='Добавить задачу' onClick={this.addTask}/>
                </div>
            </div>
        );
    }

    addStage() {
        const title = prompt('Введите название стадии');
        const stage = {title: title, tasks: [], moveTask: this.moveTask};
        this.setState({stages: this.state.stages.concat(stage)});
    }

    addTask() {
        const task = prompt('Введите название задачи');
        const stage = this.state.stages[0];
        stage.tasks.push(task);
        this.setState({stages: [stage, ...this.state.stages.slice(1)]});
    }

    moveTask(stagePosition) {
        const stages = this.state.stages.slice();
        const task = stages[stagePosition].tasks.shift();
        if ((stagePosition + 1) < stages.length) {
            stages[stagePosition + 1].tasks.push(task);
        }
        this.setState({stages: stages})
    }
}

export default App;

