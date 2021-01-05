import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import openReducer from "./reducers/openReducer";
import bodyWidthReducer from "./reducers/bodyWidthReducer";
import focusReducer from "./reducers/focusReducer";
import anchorReducer from "./reducers/anchorReducer";
import newAnchorReducer from "./reducers/newAnchorReducer";

const reducer = combineReducers({
  open: openReducer,
  width: bodyWidthReducer,
  focus: focusReducer,
  anchor: anchorReducer,
  newAnchor: newAnchorReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
