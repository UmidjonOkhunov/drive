import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, Container, Box } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import folderData from "../../data/folders";
import { Folder } from "../../types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexGrow: 1,
    flexWrap: "wrap",
    paddingTop: 20,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: 0,
    maxWidth: 1530,
    marginLeft: -30,
    transform: "translateZ(0)",
  },
  listItem: {
    width: 170,
    margin: 10,
    borderColor: "#DADCE0",
    borderRadius: "5%",
  },
}));

const InteractiveList: React.FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="xl">
      <Typography color="textSecondary">Folders</Typography>
      <div className={classes.demo}>
        <List className={classes.flexContainer}>
          {folderData.map((folder: Folder, i) => (
            <Box key={i} border={1} className={classes.listItem}>
              <ListItem button>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={folder.title} />
              </ListItem>
            </Box>
          ))}
        </List>
      </div>
    </Container>
  );
};

export default InteractiveList;
