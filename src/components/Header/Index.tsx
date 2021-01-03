import React from "react";
import Container from "@material-ui/core/Container";
import Offline from "./Offline";
import Support from "./Support";
import Settings from "./Settings";
import Search from "./Search";
import DropMenu from "./DropMenu";
import DriveIcon from "./DriveIcon";
import GoogleApps from "./GoogleApps";
import Account from "./Account";
import {
  AppBar,
  createStyles,
  Divider,
  makeStyles,
  Theme,
  Toolbar,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      elevation: 1,
      // zIndex: theme.zIndex.drawer + 1,
    },
    divider: {
      marginTop: -2,
    },
    appBar: {
      backgroundColor: "white",
      zIndex: theme.zIndex.drawer + 1,
    },
    appBar2: {
      marginTop: 65,
      paddingLeft: 260,
      backgroundColor: "white",
    },
    grow: {
      maxWidth: 550,
      flexGrow: 1,
    },
  })
);

const Header: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <AppBar position="fixed" elevation={0} className={classes.appBar2}>
        <Toolbar>
          <DropMenu />
        </Toolbar>
        <Divider className={classes.divider} />
      </AppBar>
      <AppBar position="fixed" elevation={0} className={classes.appBar}>
        <Toolbar>
          <DriveIcon />
          <Search />
          <div className={classes.grow} />
          <Offline />
          <Support />
          <Settings />
          <GoogleApps />
          <Account />
        </Toolbar>
        <Divider className={classes.divider} />
      </AppBar>
    </Container>
  );
};

export default Header;
