import * as types from '../constants/actionType'

const initialState = []

const productReducer = (state = initialState, action) => {
    let index = -1
    switch (action.type) {
        case types.GET_TASKS:
            state = action.tasks
            return state
        case types.DELETE_TASK:
            index = findIndex(state, action.id)
            if(index !== -1){
                state.splice(index, 1)
            }
            return [...state]
        case types.ADD_TASK:
            state.push(action.task)
            return [...state]
        case types.UPDATE_TASK:
            index = findIndex(state, action.task.id)
            state[index] = action.task
            return [...state]
        default:
            return state
    }
}

const findIndex = (state, id) => {
    let index = -1
    for (let i = 0; i < state.length; i++) {
        if(state[i].id === id){
            index = i  
            break
        }      
    }
    return index
}

export default productReducer