import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, IconButton, Theme, Tooltip } from "@material-ui/core";

const LightTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}))(Tooltip);

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    color: "#5F6368",
    paddingLeft: 0,
    paddingTop: 3,
    "&:hover": {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
    "&:active": {
      boxShadow: "none",
    },
    "&:focus": {
      textDecoration: "underline",
    },
  },
})(IconButton);

function HomeIcon() {
  const temp =
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Google_Drive_logo.svg";
  return (
    <LightTooltip title="Drive">
      <BootstrapButton disableRipple>
        <img src={temp} alt="Drive" width="45" style={{ padding: 10 }} /> Drive
      </BootstrapButton>
    </LightTooltip>
  );
}

export default function InteractiveList() {
  return (
    <Grid>
      <HomeIcon />
    </Grid>
  );
}
