import { focusAction } from "../types";

const focusReducer = (state = false, action: focusAction): boolean => {
  switch (action.type) {
    case "SET_FOCUS":
      return action.focus;
    default:
      return state;
  }
};

export const focusChange = (focus: boolean): focusAction => {
  return {
    type: "SET_FOCUS",
    focus,
  };
};

export default focusReducer;
