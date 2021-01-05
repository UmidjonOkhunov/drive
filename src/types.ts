export interface Folder {
  title: string;
  author: string;
}

export interface File {
  title: string;
  author: string;
}

export interface quickFile {
  title: string;
  author: string;
  lastEdited: string;
}

export type openAction =
  | {
      type: "SET_ACCOUNT_OPEN";
      open: boolean;
    }
  | {
      type: "TOGGLE_ACCOUNT_OPEN";
    }
  | {
      type: "SET_GOOGLE_OPEN";
      open: boolean;
    }
  | {
      type: "TOGGLE_GOOGLE_OPEN";
    }
  | {
      type: "SET_OFFLINE_OPEN";
      open: boolean;
    }
  | {
      type: "TOGGLE_OFFLINE_OPEN";
    }
  | {
      type: "SET_SETTINGS_OPEN";
      open: boolean;
    }
  | {
      type: "TOGGLE_SETTINGS_OPEN";
    }
  | {
      type: "SET_SUPPORT_OPEN";
      open: boolean;
    }
  | {
      type: "TOGGLE_SUPPORT_OPEN";
    };

export type bodyWidthAction = {
  type: "SET_WIDTH";
  width: number;
};

export interface openState {
  account: boolean;
  google: boolean;
  offline: boolean;
  settings: boolean;
  support: boolean;
}

export type focusAction = {
  type: "SET_FOCUS";
  focus: boolean;
};

export type anchor = null | HTMLElement;

export type anchorAction = {
  type: "SET_ANCHOR";
  anchor: anchor;
};
