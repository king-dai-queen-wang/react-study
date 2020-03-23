import {ActionInterface} from "../action.interface";

export interface TodoActionInterface extends ActionInterface{
    id?: any
    payload?: any;
    text?: string;
    name: string;
}
