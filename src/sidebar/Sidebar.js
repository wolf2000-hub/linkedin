import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const { user } = useSelector(selectUser);
  const SidebarItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <main className="sidebar">
      <div className="sidebar__top">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,300</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,570</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {SidebarItem("reactjs")}
        {SidebarItem("programming")}
        {SidebarItem("softwareengineering")}
        {SidebarItem("design")}
        {SidebarItem("developer")}
      </div>
    </main>
  );
}

export default Sidebar;
