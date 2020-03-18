import {ActionInterface} from "../action.interface";

export interface TodoActionInterface extends ActionInterface{
    text?: string;
    name: string;
}
