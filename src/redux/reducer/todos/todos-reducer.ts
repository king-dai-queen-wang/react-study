import {TodoActionInterface} from "../../models/todos/todo-action.interface";
import {TodoActionEnum} from "../../models";
import {TodoStateModel} from "../../models/todos/todo-state.model";

export const todosReducer = (state: TodoStateModel[] = [], action: TodoActionInterface) => {
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
                {...item, completed: true } : item)
        }
        default: return state;
    }
}
