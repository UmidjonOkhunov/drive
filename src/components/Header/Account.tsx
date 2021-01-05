import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  accountOpenChange,
  toggleAccountOpen,
} from "../../reducers/openReducer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import {
  Tooltip,
  Divider,
  Popper,
  Paper,
  Grow,
  ClickAwayListener,
  MenuList,
  Avatar,
} from "@material-ui/core";
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
  // const [open, setOpen] = React.useState(false);
  const open = useSelector((state: { open: openState }) => state.open.account);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  // const handleToggle = () => {
  //   setOpen((prevOpen) => !prevOpen);
  // };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    // setOpen(false);
    dispatch(accountOpenChange(false));
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      dispatch(accountOpenChange(false));
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
      <Tooltip title="Google Account /n Name /n email">
        <IconButton
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={() => dispatch(toggleAccountOpen())}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
