import {TodoActionEnum} from "../../../models/redux/todos";

let nextTodoId = 0;
export const addTodoAction = text => ({
    type: TodoActionEnum.ADD_TODO,
    id: nextTodoId++,
    text
});
