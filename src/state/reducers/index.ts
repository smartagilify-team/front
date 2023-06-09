import { combineReducers } from "redux";
import themeReducer from "./themeReducer";

const reducers = combineReducers({
  theme: themeReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
