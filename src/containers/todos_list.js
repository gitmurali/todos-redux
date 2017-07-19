import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions';

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
                <li className="list-group-item" key={index}>
                    {todo}
                        <button type="button"
                                style={deleteBtnStyle}
                                className="btn btn-danger"
                                onClick={() => { this.deleteTodo(index) }}>Delete
                        </button>
                </li>
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

const deleteBtnStyle = {
    float: 'right',
    position: 'relative',
    top: '-.4em'
};

export default connect(mapStateToProps, {deleteTodo})(TodosList);
