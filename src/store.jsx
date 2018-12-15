import {createStore} from 'redux';

const ADD_STAGE = 'ADD_STAGE';
const ADD_TASK = 'ADD_TASK';
const MOVE_TASK = 'MOVE_TASK';

const initialState = {stages: []}

export function addStage(title) {
    return {
        type: ADD_STAGE,
        payload: {title}
    };
}

export function addTask(title) {
    return {
        type: ADD_TASK,
        payload: {title}
    };
}

export function moveTask(stagePosition) {
    return {
        type: MOVE_TASK,
        payload: {stagePosition}
    };
}

function taskReducer(state=initialState, {type, payload}) {
    switch(type) {
        case ADD_STAGE:
            const new_stage = {title: payload.title, tasks: []};
            return {
                ...state,
                stages: [...state.stages, new_stage]
            };
        case ADD_TASK:
            const stage = state.stages[0];
            stage.tasks.push(payload.title);
            return {
                ...state,
                stages: [stage, ...state.stages.slice(1)]
            };
        case MOVE_TASK:
            const stage_1 = state.stages[payload.stagePosition];
            const stage_2 = state.stages[payload.stagePosition + 1];
            const task = stage_1.tasks.pop();
            if (stage_2 === undefined) {
                return {
                    ...state,
                    stages: [...state.stages.slice(0, -1), stage_1]
                }
            }
            if ((payload.stagePosition + 1) < state.stages.length) {
                stage_2.tasks.push(task);
            }
            const stages = [...state.stages.slice(0, payload.stagePosition), stage_1, stage_2, ...state.stages.slice(payload.stagePosition + 2)];
            return {
                ...state,
                stages: stages
            };
        default:
            return state;
    }
}

const store = createStore(taskReducer, initialState);
export default store;

