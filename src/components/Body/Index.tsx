import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import QuickAccess from "./QuickAccess";
import Files from "./Files";
import Folders from "./Folders";

import { createStyles, Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: 1500,
      paddingTop: 90,
      position: "absolute",
      left: 250,
      paddingRight: 0,
    },
  })
);

const Body: React.FC = () => {
  const classes = useStyles();
  const [width, setWidth] = useState(1900);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container
      className={classes.root}
      maxWidth="xl"
      style={{ width: width - 230 }}
    >
      <Divider />
      <QuickAccess />
      <Folders />
      <Files />
    </Container>
  );
};

export default Body;
