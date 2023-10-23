import * as actions from './actionTypes'

export const taskAdded = (id,title) => ({
    type: actions.TASK_ADDED,
    payload: {
        id,
        title
    }
})