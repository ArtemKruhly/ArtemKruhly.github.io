export const ADD_TODO  = 'ADD-TODO';
export const DELETE_TODO = 'DELETE-TODO';

export const  addTodo = () => {
    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            todo: [
                {id: 1, name: 'Art'}
            ]
        })
    }
};

