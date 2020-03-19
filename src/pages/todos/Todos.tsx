import React from "react";
import { connect } from 'react-redux'
import {addTodoAction} from "../../redux/actions/todo/todo-actions";
import {TodoStateModel} from "../../redux/models/todos";
import {Dispatch} from "redux";


interface Iprop {
    dispatch: (param: any) => any;
    toggleTodo: (param: any) => any;
    todos: TodoStateModel[]
}

class Todos extends React.Component<Iprop>{

    render() {
        const { todos, toggleTodo } = this.props;
        return <button onClick={() => toggleTodo('dww')}>
            Add Todos
            {(todos && todos.length) || 0}
        </button>;
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleTodo: id => dispatch(addTodoAction(id))
});

const mapStateToProps = state => {
    return ({
        todos: state.todos
    });
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
