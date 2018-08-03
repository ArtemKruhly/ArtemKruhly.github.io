import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

     styles = theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        input: {
            margin: theme.spacing.unit,
        },
    });

    handleClick =(todo) => {
        if (todo.length > 0) {
            this.props.handleClick(todo);
            this.setState({
                value: ''
            });
        }

    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            value: e.target.value
        });
    };

    render() {
        return(
            <div className="cont">
                <input
                    placeholder="task"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <Button variant="contained" color="elegant" onClick={() => this.handleClick(this.state.value)} style={{ marginLeft: '30px' }}> Submit </Button>
            </div>
        );
    }
}

export default TodoInput;