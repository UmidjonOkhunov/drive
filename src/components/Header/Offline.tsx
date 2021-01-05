import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import OfflinePinIcon from "@material-ui/icons/OfflinePin";
import {
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
  Switch,
  Tooltip,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  offlineOpenChange,
  toggleOfflineOpen,
} from "../../reducers/openReducer";
import { openState } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      float: "right",
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  })
);

const Offline: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state: { open: openState }) => state.open.offline);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    dispatch(toggleOfflineOpen());
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    dispatch(offlineOpenChange(false));
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      dispatch(offlineOpenChange(false));
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false && anchorRef.current) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <Tooltip title="Ready for offline">
        <IconButton
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <OfflinePinIcon />
        </IconButton>
      </Tooltip>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem>
                    <ListItemText primary="Offline preview" />
                    <ListItemIcon>
                      <Switch
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                    </ListItemIcon>
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default Offline;
