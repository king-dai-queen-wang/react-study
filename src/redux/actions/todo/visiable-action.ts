import {VisibaleFilterActionInterface} from "../../enum/todos/visibaleFilterAction.interface";

export const setVisibilityFilter = (filter) => ({
    type: VisibaleFilterActionInterface.SET_VISIBILITY_FILTER,
    filter
});
