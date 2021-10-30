import React from "react";
import "./SidebarNavbarWrapper.css";
import Navbar from "layouts/Navbar/Navbar";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import Sidebar from "layouts/Sidebar/Sidebar";

function SidebarNavbarWrapper(props) {
  return (
    <div>
      <Tabs defaultTab={1}>
        <Navbar />
        <div className="tabs-wrapper bs-bg-content">
          <Tab
            label="Pets"
            tabIndex={1}
            className="navbar-tab text-white"
            activeClassName="navbar-tab-active"
          />
        </div>
        <Sidebar />

        <div className="wrapper-body bs-bg-content">{props.children}</div>
      </Tabs>
    </div>
  );
}

export default SidebarNavbarWrapper;
