import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import QuickAccess from "./QuickAccess";
import Files from "./Files";
import Folders from "./Folders";
import { createStyles, Divider, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { bodyWidthChange } from "../../reducers/bodyWidthReducer";

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
  const dispatch = useDispatch();
  const width = useSelector((state: { width: number }) => state.width);

  useEffect(() => {
    function handleResize() {
      dispatch(bodyWidthChange(window.innerWidth));
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
