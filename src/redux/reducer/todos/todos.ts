import {TodoActionEnum, TodoActionInterface, TodoStateModel} from "../../models/todos";

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
                {...item, completed: true } : item)
        }
        default: return state;
    }
}
