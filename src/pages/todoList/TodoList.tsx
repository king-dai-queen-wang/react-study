import React from "react";
import {AddTodo, IAddTodoProp, IAddTodoState} from "./AddTodo/AddTodo";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addTodoAction} from "../../redux/actions/todo/todo-actions";
import {fetchUser} from "../../redux/actions/user/user-actions";
import {TodoStateModel} from "../../redux/models";
import {TodoLinks} from "./TodoLinks/TodoLinks";

export interface ITodoStates {
    todos: TodoStateModel[];
}
export interface ITodoListProps extends IAddTodoProp{
}
// @ts-ignore
@connect(
    (state: ITodoStates): ITodoStates => ({todos: state.todos}),
    (dispatch: Dispatch) => {
        return ({
            addToDo: inputVal => dispatch(addTodoAction(inputVal)),
            fetchUser: (name) => dispatch(fetchUser(name))
        });
    }
)
export class TodoList extends React.Component<ITodoListProps> {
    render() {
        return (
            <div>
                <AddTodo {...this.props}/>
                <TodoLinks/>
            </div>
        );
    }
}
