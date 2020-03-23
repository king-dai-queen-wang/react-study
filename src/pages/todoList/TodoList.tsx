import React from "react";
import {AddTodo, IAddTodoProp} from "./AddTodo/AddTodo";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {addTodoAction} from "../../redux/actions/todo/todo-actions";
import {fetchUser} from "../../redux/actions/user/user-actions";
import {TodoStateModel} from "../../redux/models";
import {TodoLinks} from "./TodoLinks/TodoLinks";
import {ToDoFilterFooter} from "./ToDoFilterFooter/ToDoFilterFooter";
import {VisiableFilterEnum} from "../../redux/enum/todos/visiable-filter.enum";

export interface ITodoStates {
    todos: TodoStateModel[];
    visiableFilter: VisiableFilterEnum
}
export interface ITodoListProps extends IAddTodoProp{
}
// @ts-ignore
@connect(
    (state: ITodoStates) => ({todos: state.todos}),
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
                <ToDoFilterFooter/>
            </div>
        );
    }
}
