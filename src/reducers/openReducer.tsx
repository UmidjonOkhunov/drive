import { openAction, openState } from "../types";

const intialState = {
  account: false,
  google: false,
  offline: false,
  settings: false,
  support: false,
};

const accountOpenReducer = (
  state: openState = intialState,
  action: openAction
): openState => {
  switch (action.type) {
    case "SET_ACCOUNT_OPEN":
      return { ...state, account: action.open };
    case "TOGGLE_ACCOUNT_OPEN":
      return { ...state, account: !state.account };
    case "SET_GOOGLE_OPEN":
      return { ...state, google: action.open };
    case "TOGGLE_GOOGLE_OPEN":
      return { ...state, google: !state.google };
    case "SET_OFFLINE_OPEN":
      return { ...state, offline: action.open };
    case "TOGGLE_OFFLINE_OPEN":
      return { ...state, offline: !state.offline };
    case "SET_SETTINGS_OPEN":
      return { ...state, settings: action.open };
    case "TOGGLE_SETTINGS_OPEN":
      return { ...state, settings: !state.settings };
    case "SET_SUPPORT_OPEN":
      return { ...state, support: action.open };
    case "TOGGLE_SUPPORT_OPEN":
      return { ...state, support: !state.support };
    default:
      return state;
  }
};

export const accountOpenChange = (open: boolean): openAction => {
  return {
    type: "SET_ACCOUNT_OPEN",
    open,
  };
};

export const toggleAccountOpen = (): openAction => {
  return {
    type: "TOGGLE_ACCOUNT_OPEN",
  };
};

export const googleOpenChange = (open: boolean): openAction => {
  return {
    type: "SET_GOOGLE_OPEN",
    open,
  };
};

export const toggleGoogleOpen = (): openAction => {
  return {
    type: "TOGGLE_GOOGLE_OPEN",
  };
};

export const offlineOpenChange = (open: boolean): openAction => {
  return {
    type: "SET_OFFLINE_OPEN",
    open,
  };
};

export const toggleOfflineOpen = (): openAction => {
  return {
    type: "TOGGLE_OFFLINE_OPEN",
  };
};

export const settingsOpenChange = (open: boolean): openAction => {
  return {
    type: "SET_SETTINGS_OPEN",
    open,
  };
};

export const toggleSettingsOpen = (): openAction => {
  return {
    type: "TOGGLE_SETTINGS_OPEN",
  };
};

export const supportOpenChange = (open: boolean): openAction => {
  return {
    type: "SET_SUPPORT_OPEN",
    open,
  };
};

export const toggleSupportOpen = (): openAction => {
  return {
    type: "TOGGLE_SUPPORT_OPEN",
  };
};

export default accountOpenReducer;
