import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions';
import {TodoItem} from '../components/todo_item';

class TodosList extends Component {

    constructor(props) {
        super(props);
    }

    deleteTodo(id) {
        this.props.deleteTodo(id);
    }

    renderTodoList() {
        return this.props.todos.map((todo, index) => {
            return (
                <div>
                    <TodoItem todoItem={todo} indexKey={index} deleteTodo={this.deleteTodo.bind(this)}/>
                </div>
            );
        });
    }

    render() {
        return (
            <ul className="list-group marginTop">
                {this.renderTodoList()}
            </ul>
        );
    }
}

TodosList.propTypes = {};
TodosList.defaultProps = {};

function mapStateToProps({todos}) {
    return {todos};
}

export default connect(mapStateToProps, {deleteTodo})(TodosList);
