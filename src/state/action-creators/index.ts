import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const fetchTheme = () => {
  return async (dispatch: Dispatch<Action>) => {
    const theme = localStorage.getItem("theme");
    let themeData = false;

    if (theme === "true") {
      themeData = true;
    } else if (theme === "false") {
      themeData = false;
    }

    dispatch({ type: ActionType.fetchTheme, data: themeData });
  };
};

export const setTheme = (theme:boolean) => {
  return async (dispatch: Dispatch<Action>) => {
    localStorage.setItem("theme", String(theme));
    dispatch({ type: ActionType.setTheme });
  };
};

export type AppDispatch = ReturnType<typeof fetchTheme>;

