import React from "react";
import { connect } from 'react-redux'
import {addTodoAction} from "../../redux/todos/actions/todo-actions";

class Todos extends React.Component {
    addTodo() {
        dispatch(addTodoAction('dww'));
    }
    render() {
        return <button onClick={() => this.addTodo}>Add Todos</button>;
    }
}

export default connect()(Todos);
