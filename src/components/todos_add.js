import React, {Component} from 'react';

class TodosAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    clearInput() {
        this.setState({
            term: ''
        })
    }

    onSubmit(event) {
        event.preventDefault();
        this.props.onAddTodo(this.state.term);
        this.clearInput();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-inline">
                        <input type="text"
                               ref="todoAddInput"
                               id="todoInput"
                               placeholder="Add Todo"
                               className="form-control"
                               autoComplete="off"
                               onChange={this.handleChange}
                               value={this.state.term}/>
                        <button className="btn btn-danger" type="submit">Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

TodosAdd.propTypes = {};
TodosAdd.defaultProps = {};

export default TodosAdd;
