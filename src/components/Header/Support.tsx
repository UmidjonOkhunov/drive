import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import {
  Tooltip,
  Divider,
  Popper,
  Paper,
  Grow,
  ClickAwayListener,
  MenuList,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import {
  supportOpenChange,
  toggleSupportOpen,
} from "../../reducers/openReducer";
import { openState } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  })
);

const DropMenu: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state: { open: openState }) => state.open.support);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    dispatch(toggleSupportOpen());
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    dispatch(supportOpenChange(false));
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      dispatch(supportOpenChange(false));
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
      <Tooltip title="Support">
        <IconButton
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <HelpOutlineIcon />
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
                  <MenuItem onClick={handleClose}>Help</MenuItem>
                  <MenuItem onClick={handleClose}>Training</MenuItem>
                  <MenuItem onClick={handleClose}>Updates</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>Terms and Policy</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>Send Feedback</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default DropMenu;
