import {ActionInterface} from "../action-enum/action.interface";

export interface TodoActionInterface extends ActionInterface{
    id?: any
    payload?: any;
    text?: string;
}
