import React, {Component} from 'react';
import {TodoItem} from '../components/todo_item';
import TodoAdd from '../components/todos_add';

class TodosList extends Component {

    constructor(props) {
        super(props);
    }

    deleteTodo(id) {
        this.props.onDeleteTodo(id);
    }

    renderTodoList() {
        return this.props.todos.map((todo, index) => {
            return (
                <div key={index}>
                    <TodoItem todoItem={todo} indexKey={index} deleteTodo={this.props.onDeleteTodo.bind(this)} />
                </div>
            );
        });
    }

    render() {
        return (
            <ul className="list-group marginTop">
                <TodoAdd {...this.props} />
                {this.renderTodoList()}
            </ul>
        );
    }
}

TodosList.propTypes = {};
TodosList.defaultProps = {};

export default TodosList;
