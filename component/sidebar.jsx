import React from 'react';
import Image from 'next/image';
import logo from '../picture/logoputih.png';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='contsb'>
      <nav className="sidebar navbar navbar-expand d-flex flex-column alignt-item-start" id="side_nav">
        <div className="logosb">
          <Image src={logo} alt="Picture of the author" width="237px" height="122px" />
        </div>
        <div className="isisidebar">
          <div className="menudash">
            <a href="/dashboard">Dashboard</a>
          </div>
          <div className="menu">
            <a href="/menteelist">Mentee</a>
          </div>
          <div className="menuser">
            <a href="/userlist">User</a>
          </div>
          <div className="menu">
            <a href="/class">Class</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
