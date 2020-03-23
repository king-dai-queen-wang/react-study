import {TodoActionEnum} from "../../enum/todos/todo-action.enum";

let nextTodoId = 0;
export const addTodoAction = (text: string) => ({
    type: TodoActionEnum.ADD_TODO,
    id: nextTodoId++,
    text
});

export const toggleActiveToDoItem = (id: number) => ({
    type: TodoActionEnum.TOGGLE_TODO,
    id,
});
