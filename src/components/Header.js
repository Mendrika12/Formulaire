import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core"
import formimage from "./images/google_forms.png"
import  SearchIcon  from "@material-ui/icons/Search"
import AppsIcon from "@material-ui/icons/Apps"
import Avatar from "@material-ui/core/Avatar"
import avatarimage from "./images/im_1.png"
import { Height } from "@material-ui/icons";
import TemporaryDrawer from "./TemporaryDrawer";

function Header() {
  return (
    <div className="header">
      <div className="header_info">
      <TemporaryDrawer/>
      <IconButton>

        <MenuIcon />

        </IconButton>
        <img src={formimage} style={{height:'40px',width:'40px'}} className="form image" />
        <div className="info">
          Forms
        </div>
      </div>

      <div className="header_search">
      <IconButton> <SearchIcon/> </IconButton>

      <input type="text" name="search" placeholder="search"/>
      </div>

      <div className="header_right">
      <IconButton>
      <AppsIcon/>

      </IconButton>
 
      <IconButton>
      <Avatar src="avatarimage"/>
      </IconButton>
      </div>
    </div>
  );
}

export default Header;