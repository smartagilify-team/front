import reducers from ".";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface ThemeState {
  theme: boolean;
}

const initialState = {
  theme: false,
};

const reducer = (state: ThemeState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.fetchTheme:
      return { theme: action.data };
    default:
      return state;
  }
};

export default reducer;
