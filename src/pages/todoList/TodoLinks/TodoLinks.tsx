import React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import { toggleActiveToDoItem } from "../../../redux/actions/todo/todo-actions";
import {ITodoStates} from "../TodoList";
import {TodoStateModel} from "../../../redux/models";
import './TodoLinks.scss';
import {VisiableFilterEnum} from "../../../redux/enum/todos/visiable-filter.enum";

interface ITodoLinksProp extends ITodoStates{
    toggleActiveToDoItem: () => void
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case VisiableFilterEnum.SHOW_ALL:
            return todos;
        case VisiableFilterEnum.SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case VisiableFilterEnum.SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

// @ts-ignore
@connect(
    (state: ITodoStates) => ({todos: getVisibleTodos(state.todos, state.visiableFilter)}),
    (dispatch: Dispatch) => ({toggleActiveToDoItem: id => dispatch(toggleActiveToDoItem(id))}))
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
