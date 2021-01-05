import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {
  ListItemText,
  Divider,
  Drawer,
  SvgIcon,
  Button,
  LinearProgress,
  Box,
  Typography,
  LinearProgressProps,
  withStyles,
} from "@material-ui/core";
import { ReactComponent as DriveIcon } from "./my-drive-outline.svg";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import {
  PeopleOutlined,
  AccessTimeOutlined,
  StarBorderOutlined,
  DeleteOutlined,
  StorageOutlined,
} from "@material-ui/icons";
import New from "./New";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: 220,
      border: 0,
    },
    listItem: {
      paddingLeft: 25,
      paddingTop: 2,
      paddingBottom: 2,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
    },
    buyStorage: {
      marginLeft: 40,
      textTransform: "none",
      color: "#1A73E8",
    },
    currentListItem: {
      paddingLeft: 2,
      paddingTop: 2,
      paddingBottom: 2,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      backgroundColor: "#E8F0FE",
      color: "#1967DA",
    },
    text: {
      marginLeft: -15,
    },
  })
);

const BorderLinearProgress = withStyles(() =>
  createStyles({
    colorPrimary: {
      backgroundColor: "#E0E0E0",
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#4285F4",
    },
  })
)(LinearProgress);

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box alignItems="center">
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">
          {" "}
          6.7 GB of 15 GB used
        </Typography>
      </Box>
      <Box width="100%" mr={1}>
        <BorderLinearProgress variant="determinate" {...props} />
      </Box>
    </Box>
  );
}

const Index: React.FC = () => {
  const classes = useStyles();
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem>
          <New />
        </ListItem>
        <ListItem className={classes.currentListItem}>
          <ListItemIcon>
            <ArrowRightIcon />
            <SvgIcon
              component={DriveIcon}
              viewBox="0 0 600 476.6"
              style={{ color: "#1967DA", fontSize: 25 }}
            />
          </ListItemIcon>
          <ListItemText primary="My Drive" style={{ paddingLeft: 7 }} />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon>
            <PeopleOutlined />
          </ListItemIcon>
          <ListItemText primary="Shared with me" className={classes.text} />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon>
            <AccessTimeOutlined />
          </ListItemIcon>
          <ListItemText primary="Recent" className={classes.text} />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon>
            <StarBorderOutlined />
          </ListItemIcon>
          <ListItemText primary="Starred" className={classes.text} />
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon>
            <DeleteOutlined />
          </ListItemIcon>
          <ListItemText primary="Bin" className={classes.text} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button className={classes.listItem}>
          <ListItemIcon>
            <StorageOutlined />
          </ListItemIcon>
          <ListItemText primary="Storage" className={classes.text} />
        </ListItem>
        <ListItem className={classes.listItem}>
          <ListItemText
            inset
            primary={<LinearProgressWithLabel value={(6.7 / 15) * 100} />}
            className={classes.text}
          />
        </ListItem>
        <ListItem>
          <Button color="primary" className={classes.buyStorage}>
            Buy storage
          </Button>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <nav className={classes.root} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </nav>
    </div>
  );
};

export default Index;
