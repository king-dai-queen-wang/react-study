export interface TodoActionInterface {
    id?: any
    type: any;
    payload?: any;
    text?: string;
    name: string;
}
export class TodoStateModel {
    id: any = null;
    text?: string;
    completed: boolean = false;
}
export enum TodoActionEnum {
    'ADD_TODO',
    'TOGGLE_TODO'
}
