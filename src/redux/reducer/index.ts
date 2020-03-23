import {todos} from "./todos/todos";
import {combineReducers} from "redux";
import {visiableFilter} from "./todos/visiableFilter";

export default combineReducers({
    todos,
    visiableFilter
})
