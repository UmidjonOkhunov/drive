import { bodyWidthAction } from "../types";

const bodyWidthReducer = (state = 1900, action: bodyWidthAction): number => {
  switch (action.type) {
    case "SET_WIDTH":
      return action.width;
    default:
      return state;
  }
};

export const bodyWidthChange = (width: number): bodyWidthAction => {
  return {
    type: "SET_WIDTH",
    width,
  };
};

export default bodyWidthReducer;
