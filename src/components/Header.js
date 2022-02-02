import { Avatar } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import "./Header.css";
import { useStateValue } from "../StateProvider";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='header'>
      <div className='header__left'>
        <Avatar src={user?.photoURL} />
        <AccessTimeIcon />
      </div>
      <div className='header__search'>
        <SearchIcon />
        <input type='text' placeholder='search' />
      </div>
      <div className='header__right'>
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
