import TodosList from '../components/todos_list';
import { connect } from 'react-redux'
import { addTodo, deleteTodo } from '../actions'

const mapStateToProps = (state, props) =>
    ({
        todos: state.todos,
    })

const mapDispatchToProps = disptach =>
    ({
        onDeleteTodo(id) {
            disptach(
                deleteTodo(id)
            )
        },
        onAddTodo(value) {
            disptach(
                addTodo(value)
            )
        },
    })

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
