import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class TodoItems extends Component {
    constructor(props) {
        super(props);
    }


    removeTodo = (id) => {
        this.props.removeTodo(id);
    };

    render() {
        return (
            <div className="todoItems">
                {this.props.todo.text}
                <Button variant="contained" color="primary" onClick={(e) => this.removeTodo(this.props.id)} style={{ marginLeft: '30px' }}>Remove</Button>
            </div>
        )
    }
}

export default TodoItems;