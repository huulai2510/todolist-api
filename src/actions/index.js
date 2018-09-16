import * as types from '../constants/actionType'
import callApi from '../utils/apiCaller'

export const actDeleteTaskRequest = id => {
    return dispatch => {
        callApi(`tasks/${id}`, 'DELETE', null).then(res => {
            dispatch(actDeleteTask(id))
        })
    }
}

export const actDeleteTask = id => {
    return {
        type: types.DELETE_TASK,
        id
    }
}

export const actAddTaskRequest = task => {
    return dispatch => {
        callApi(`tasks`, 'POST', task).then(res => {
            dispatch(actAddTask(task))
        })
    }
}

export const actAddTask = task => {
    return {
        type: types.ADD_TASK,
        task
    }
}

export const actUpdateTaskRequest = task => {
    return dispatch => {
        callApi(`tasks/${task.id}`, 'PUT', task).then(res => {
            dispatch(actUpdateTask(task))
        })
    }
}

export const actUpdateTask = task => {
    return {
        type: types.UPDATE_TASK,
        task
    }
}

export const actGetTasksRequest = () => {
    return dispatch => {
        callApi('tasks', 'GET', null).then(res => {
            dispatch(actGetTasks(res.data))
        })
    }
}

export const actGetTasks = tasks => {
    return {
        type: types.GET_TASKS,
        tasks
    }
}