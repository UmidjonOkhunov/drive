import { newAnchorAction, anchor } from "../types";

const anchorReducer = (state = null, action: newAnchorAction): anchor => {
  switch (action.type) {
    case "SET_NEW_ANCHOR":
      return action.anchor;
    default:
      return state;
  }
};

export const anchorChange = (anchor: anchor): newAnchorAction => {
  return {
    type: "SET_NEW_ANCHOR",
    anchor,
  };
};

export default anchorReducer;
