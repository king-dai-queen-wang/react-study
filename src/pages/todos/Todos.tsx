import React from "react";
import { connect } from 'react-redux'
import {addTodoAction} from "../../redux/actions/todo/todo-actions";
import {TodoStateModel} from "../../redux/models/todos";


interface Iprop {
    dispatch: (param: any) => any;
    state: TodoStateModel
}
//
// const mapDispatchToProps = dispatch => ({
//     toggleTodo: id => dispatch(addTodoAction(id))
// });

const Todos  = (props: Iprop) => {
    function addTodo() {
        props.dispatch(addTodoAction('dww'));
    }
    console.log(props.state)
    return <button onClick={() => addTodo()}>Add Todos</button>;
}

export default connect()(Todos);
