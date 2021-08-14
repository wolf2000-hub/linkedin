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
import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";

const Header = () => {
  const dispatch = useDispatch();
  const LogoutForm = async () => {
    await auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <main className="header">
      <div className="Header__left">
        <img src="./images/linkedin.png" alt="header_img" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="Header__Right">
        <HeaderOptions Icon={Home} title="Home" />
        <HeaderOptions Icon={SupervisorAccount} title="my Network" />
        <HeaderOptions Icon={BusinessCenter} title="Jobs " />
        <HeaderOptions Icon={Chat} title="Message" />
        <HeaderOptions Icon={Notifications} title="Notification " />
        <HeaderOptions onClick={LogoutForm} avatar={true} title="Me" />
      </div>
    </main>
  );
};
export default Header;
