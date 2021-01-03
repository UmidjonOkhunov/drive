import React, { useState } from "react";
import {
  makeStyles,
  Theme,
  createStyles,
  fade,
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: "4px",
      marginTop: -10,
      marginLeft: 130,
      flexGrow: 1,
      backgroundColor: "#F1F3F4",
      display: "flex",
      alignItems: "center",

      maxWidth: 792,
    },
    focused: {
      padding: "4px",
      marginTop: -10,
      marginLeft: 130,
      flexGrow: 1,
      display: "flex",
      elevation: 10,
      alignItems: "center",
      maxWidth: 792,
      backgroundColor: "#fff",
      border: "1px",
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.primary.main,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
  })
);

export default function CustomizedInputBase() {
  const classes = useStyles();
  const [focused, setFocused] = useState(false);

  return (
    <Paper
      component="form"
      className={focused ? classes.focused : classes.root}
      elevation={0}
    >
      <Tooltip title="Search">
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>

      <InputBase
        className={classes.input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search in Drive"
        inputProps={{ "aria-label": "search google drive" }}
      />

      <Tooltip title="Search options">
        <IconButton className={classes.iconButton} aria-label="menu">
          <ArrowDropDownIcon />
        </IconButton>
      </Tooltip>
    </Paper>
  );
}
