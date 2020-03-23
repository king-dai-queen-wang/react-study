import {TodoActionEnum} from "../../enum/todos/todo-action.enum";
import {TodoActionInterface} from "../../models/todos/todoAction.interface";
import {TodoStateModel} from "../../models/todos/todo.model";

export const todos = (state: TodoStateModel[] = [], action: TodoActionInterface) => {
    switch (action.type) {
        case TodoActionEnum.ADD_TODO: {
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        }
        case TodoActionEnum.TOGGLE_TODO: {
            return state.map(item => item.id === action.id ?
                {...item, completed: !item.completed } : item)
        }
        default: return state;
    }
};
