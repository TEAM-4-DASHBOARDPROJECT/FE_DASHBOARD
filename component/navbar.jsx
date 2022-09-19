import React from "react";
import Image from "next/image";
import logo from "../picture/logoputih.png";
import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <div className="navbar">
      <Image className="logo" src={logo} alt="Picture of the author" width="237px" height="122px" />
      <div className="isinavbar">
        <div>
          <a href="">Dashboard</a>
        </div>
        <div>
          <a href="">Mentee</a>
        </div>
        <div>
          <a href="">Mentee Log</a>
        </div>
        <div>
          <a href="">Add Mentee</a>
        </div>
        <div>
          <a href="">User</a>
        </div>
        <div>
          <a href="">Class</a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
