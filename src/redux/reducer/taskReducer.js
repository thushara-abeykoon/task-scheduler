import * as actions from '../actionTypes'
export default function taskReducer(state=[],action){
    switch (action.type) {

        case actions.TASK_FETCHED:
            return action.payload;

        case actions.TASK_ADDED:
            return [
                ...state,
                action.payload
            ]
        case actions.TASK_REMOVED:
            return state.filter(task=>task.id!==action.payload.id)

        case actions.TASK_UPDATED:
            return state.filter(task=>task.id===action.payload.id?(action.payload):task);

        default:
            return state;
    }
}