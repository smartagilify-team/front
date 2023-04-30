import { ActionType } from "../action-types";

interface fetchThemeAction {
  type: ActionType.fetchTheme;
  data: boolean;
}

interface setThemeAction {
  type: ActionType.setTheme;
}

export type Action = fetchThemeAction | setThemeAction;
