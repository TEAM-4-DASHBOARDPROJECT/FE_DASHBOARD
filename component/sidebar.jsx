import React from "react";
import Image from "next/image";
import logo from "../picture/logoputih.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar navbar navbar-expand d-flex flex-column alignt-item-start" id="side_nav">
      <div className="logo">
        <Image src={logo} alt="Picture of the author" width="237px" height="122px" />
      </div>
      <div className="isisidebar">
        <div className="menu">
          <a href="/dashboard">Dashboard</a>
        </div>
        <div className="menu">
          <a href="/mentee">Mentee</a>
        </div>
        <div className="menu">
          <a href="/menteelog">Mentee Log</a>
        </div>
        <div className="menu">
          <a href="/addmente">Add Mentee</a>
        </div>
        <div className="menu">
          <a href="">User</a>
        </div>
        <div className="menu">
          <a href="/class">Class</a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
