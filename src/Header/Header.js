import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HeaderOptions from "./HeaderOptions";
import {
  BusinessCenter,
  Chat,
  Home,
  Notifications,
  SupervisorAccount,
} from "@material-ui/icons";

const Header = () => {
  return (
    <main className="header">
      <div className="Header__left">
        <img src="./images/linkedin.png" alt="header_img" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      {/*  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
      <div className="Header__Right">
        <HeaderOptions Icon={Home} title="Home" />
        <HeaderOptions Icon={SupervisorAccount} title="my Network" />
        <HeaderOptions Icon={BusinessCenter} title="Jobs " />
        <HeaderOptions Icon={Chat} title="Message" />
        <HeaderOptions Icon={Notifications} title="Notification " />
        <HeaderOptions
          avatar="https://w7.pngwing.com/pngs/695/655/png-transparent-head-the-dummy-avatar-man-tie-jacket-user-thumbnail.png"
          title="Me"
        />
      </div>
    </main>
  );
};
export default Header;
