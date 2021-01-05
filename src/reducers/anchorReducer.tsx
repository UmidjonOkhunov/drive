import { anchorAction, anchor } from "../types";

const anchorReducer = (state = null, action: anchorAction): anchor => {
  switch (action.type) {
    case "SET_ANCHOR":
      return action.anchor;
    default:
      return state;
  }
};

export const anchorChange = (anchor: anchor): anchorAction => {
  return {
    type: "SET_ANCHOR",
    anchor,
  };
};

export default anchorReducer;
