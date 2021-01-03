import React from "react";
import { Container, Typography, List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import quickAccessData from "../../data/quickAccess";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap",
    paddingTop: 20,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  flexContainer: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 1530,
    marginLeft: -30,
    padding: 0,
  },
  listItem: {
    maxWidth: 280,
  },
  caption: {
    marginTop: -10,
    marginBottom: 0,
  },
  lastEdited: {
    color: "#838383",
  },
  card: {},
}));

const QuickAccess: React.FC = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="xl">
      <Typography color="textSecondary">Quick access</Typography>
      <div className={classes.demo}>
        <List className={classes.flexContainer}>
          {quickAccessData.map((file, i) => (
            <ListItem button key={i} className={classes.listItem}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="data:image/jpeg;base64,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"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      component="h2"
                      className={classes.caption}
                    >
                      {file.title}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="caption"
                      className={classes.lastEdited}
                    >
                      {file.lastEdited}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </ListItem>
          ))}
        </List>
      </div>
    </Container>
  );
};

export default QuickAccess;
