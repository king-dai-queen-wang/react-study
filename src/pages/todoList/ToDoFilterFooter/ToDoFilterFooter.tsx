import {VisiableFilterEnum} from "../../../redux/enum/todos/visiable-filter.enum";
import React from "react";
import ToDoFilterLink from "./ToDoFilterLink/ToDoFilterLink";

// @ts-ignore
export const ToDoFilterFooter = () => (
  <div>
      <span>
          show:
      </span>
      <ToDoFilterLink filter={VisiableFilterEnum.SHOW_ALL}>
          ALL
      </ToDoFilterLink>
      <ToDoFilterLink filter={VisiableFilterEnum.SHOW_ACTIVE}>
          ACTIVE
      </ToDoFilterLink>
      <ToDoFilterLink filter={VisiableFilterEnum.SHOW_COMPLETED}>
          COMPLETED
      </ToDoFilterLink>
  </div>
);
