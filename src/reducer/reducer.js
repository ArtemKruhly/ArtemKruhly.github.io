import {ADD_TODO} from '../action/TodoAction';

export default function (state = {
    todo: []
}, action) {
    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todo: action.todo
        };
    }

    return state;
}
