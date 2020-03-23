import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import { toggleActiveToDoItem } from "../../../redux/actions/todo/todo-actions";
import {ITodoStates} from "../TodoList";
import {TodoStateModel} from "../../../redux/models";
import './TodoLinks.scss';
interface ITodoLinksProp extends ITodoStates{
    toggleActiveToDoItem: () => void
}
// @ts-ignore
@connect(
    (state: ITodoStates) => ({todos: state.todos}),
    (dispatch: Dispatch) => {
        return ({
            toggleActiveToDoItem: id => dispatch(toggleActiveToDoItem(id)),
        });
    })
export class TodoLinks extends React.Component<any> {
    generateList(param: TodoStateModel[], toggleActiveToDoItem) {
        return (param.map(item =>
            <li className={item.completed? 'done' : 'active'} key={item.id}
                onClick={toggleActiveToDoItem.bind(this, item.id)}>
                {item.text}
            </li>))
    }
    render() {
        const { todos, toggleActiveToDoItem } = this.props;
        return <ul>{this.generateList(todos, toggleActiveToDoItem)}</ul>;
    }
}
