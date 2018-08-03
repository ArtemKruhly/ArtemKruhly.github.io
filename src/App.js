import React, { Component } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoItems from './components/TodoItems';
import { connect } from 'react-redux';
import {addTodo} from './action/TodoAction';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [],
            nextId: 1
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo =  this.removeTodo.bind(this);
    }


    removeTodo = (id) => {
        this.setState ({
            todo: this.state.todo.filter((todo, index) => todo.id !== id)
        });
    };

    addTodo = (todoText) => {
        let todo = this.state.todo.slice();
        todo.push({id: this.state.nextId, text: todoText});
        this.setState ({
            todo: todo,
            nextId: ++this.state.nextId
        });
    };

  render() {
    return (
      <div className="App">
            <Header/>
            <div className="content">
                <TodoInput todoText="" handleClick={this.addTodo}/>
                <div className="lists">
                    <ul>
                        {
                            this.state.todo.map((todo) => {
                                return <TodoItems todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
                            })
                        }
                    </ul>
                </div>
            </div>

      </div>
    );
  }
}


export default connect(null, {addTodo}) (App);
