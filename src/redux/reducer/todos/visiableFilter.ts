import {VisiableFilterEnum} from "../../enum/todos/visiable-filter.enum";
import {VisiableActionInterface} from "../../models/todos/visiableAction.interface";
import {VisibaleFilterActionInterface} from "../../enum/todos/visibaleFilterAction.interface";

export const visiableFilter = (state: VisiableFilterEnum = VisiableFilterEnum.SHOW_ALL, action: VisiableActionInterface) => {
    switch (action.type) {
        case VisibaleFilterActionInterface.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state
    }
};
