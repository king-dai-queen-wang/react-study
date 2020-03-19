import {TodoActionEnum} from "../../models/todos";
import { ofType, combineEpics, createEpicMiddleware } from "redux-observable";
import {map, filter, mergeMap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';
let nextTodoId = 0;
export const addTodoAction = (text: string) => ({
    type: TodoActionEnum.ADD_TODO,
    id: nextTodoId++,
    text
});

const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';

export const fetchUser = username => ({ type: FETCH_USER, payload: username });
const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

export const fetchUserEpic = action$ => action$.pipe(
    ofType(FETCH_USER),
    mergeMap((action: any) =>
        ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
            map(response => fetchUserFulfilled(response))
        )
    )
);

