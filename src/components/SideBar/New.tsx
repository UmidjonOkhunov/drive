import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "./Plus.png";
import { Fab, Divider } from "@material-ui/core";
import CreateNewFolderOutlinedIcon from "@material-ui/icons/CreateNewFolderOutlined";
import InsertDriveFileOutlinedIcon from "@material-ui/icons/InsertDriveFileOutlined";
import FolderOpenOutlinedIcon from "@material-ui/icons/FolderOpenOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import SlideshowOutlinedIcon from "@material-ui/icons/SlideshowOutlined";
import FormatListBulletedOutlinedIcon from "@material-ui/icons/FormatListBulletedOutlined";
import { useDispatch, useSelector } from "react-redux";
import { anchorChange } from "../../reducers/newAnchorReducer";
import { anchor } from "../../types";

const StyledMenu = withStyles({
  paper: {
    paddingLeft: 50,
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const DriveButton = withStyles({
  root: {
    textTransform: "none",
    fontSize: 14,
    backgroundColor: "white",
    paddingLeft: "8px",
    paddingRight: "28px",
    lineHeight: 1.5,
    // boxShadow: `#F1F3F4 0 0 0 2px`,
    // borderColor: "#F1F3F4",
    "&:hover": {
      backgroundColor: "#F8F9FA",
    },
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})(Fab);

const DropMenu: React.FC = () => {
  const dispatch = useDispatch();
  const anchorEl = useSelector(
    (state: { newAnchor: anchor }) => state.newAnchor
  );
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    dispatch(anchorChange(event.currentTarget));
  };

  const handleClose = () => {
    dispatch(anchorChange(null));
  };

  return (
    <div>
      <DriveButton variant="extended" aria-label="add" onClick={handleClick}>
        <img src={AddIcon} width="25" style={{ padding: 10 }} /> New
      </DriveButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <ListItemIcon>
            <CreateNewFolderOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="New folder" />
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <InsertDriveFileOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Upload file" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FolderOpenOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Upload folder" />
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <DescriptionOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Google Docs" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ListAltOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Google Sheets" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <SlideshowOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Google Slides" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FormatListBulletedOutlinedIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Google Forms" />
        </MenuItem>
        <MenuItem>
          <ListItemText primary="More" />
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default DropMenu;
