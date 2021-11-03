import React from "react";
import "./SidebarNavbarWrapper.css";
import Navbar from "layouts/Navbar/Navbar";
import Tabs from "components/Tabs/Tabs";
import Tab from "components/Tabs/Tab";
import TabPan from "components/Tabs/TabPan";
import Sidebar from "layouts/Sidebar/Sidebar";
import CheckBox from "components/CheckBox/CheckBox";
import { Link } from "react-router-dom";

import rareIcon from "assets/images/rare-icon.png";
import EpicIcon from "assets/images/epic-icon.png";
import legendaryIcon from "assets/images/legendary-icon.png";
import Range from "components/Range/Range";
import { useDispatch } from "react-redux";
import { filterPets } from "redux/petDetails";

function SidebarNavbarWrapper(props) {
  const { sidebar = true, tabBar = true } = props;
  const [open, setOpen] = React.useState(false);
  const [showFilterArea, setShowFilterArea] = React.useState(false);
  const dispatch = useDispatch();

  // const [height, setHeight] = React.useState(152);

  const menuRef = React.useRef();
  const filterArea = React.useRef();

  React.useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const toggleFilterArea = () => {
    if (showFilterArea) {
      filterArea.current.style.height = 0;
      setShowFilterArea(false);
      // setHeight(152);
    } else {
      filterArea.current.style.height = filterArea.current.scrollHeight + "px";
      setShowFilterArea(true);
      // setHeight(filterArea.current.scrollHeight + height);
    }
  };

  return (
    <div className="bs-bg-content">
      <Tabs defaultTab={1}>
        <Navbar />
        {tabBar ? (
          <div className="tabs-wrapper bs-bg-content">
            <Tab
              label="Pets"
              tabIndex={1}
              className="navbar-tab text-white"
              activeClassName="navbar-tab-active"
            />

            {/* in responsive */}
            <div className="tabs-wrapper-responsive">
              <div className="dropdown" ref={menuRef}>
                <div
                  onClick={() => setOpen(!open)}
                  className={`dropdown-btn rounded ${open ? "open" : ""} `}
                >
                  Collection
                </div>
                <div className="dropdown-menu ">
                  <Tab
                    tabIndex={1}
                    label="Pets"
                    className="dropdown-menu-btn"
                  />
                </div>
              </div>
              <div className="filter-btn rounded" onClick={toggleFilterArea}>
                Filter{" "}
              </div>
            </div>

            <div className="filter-area bs-bg-content" ref={filterArea}>
              {" "}
              <div className="filter-area-content">
                <div className="sidebar-header">
                  <p className="fs-32px text-white weight-5 family-serif">
                    Filter
                  </p>
                  <div
                    className="blue pointer fs-16px"
                    onClick={() => dispatch(filterPets("all"))}
                  >
                    Clear filter
                  </div>{" "}
                </div>
                {/* checkboxes */}
                <div className="filter-elements">
                  <p className="text-white fs-16px">Element:</p>
                  <div className="filter-checkboxes">
                    <CheckBox img={rareIcon} title="Rare" />
                    <CheckBox img={EpicIcon} title="Epic" />
                    <CheckBox img={legendaryIcon} title="Legendary" />
                  </div>
                </div>
                {/* range-sliders */}
                <div className="choose-range-wrapper">
                  <Range rangeName="Attack" />
                  <Range rangeName="Defence" />
                  <Range rangeName="HP" />
                  <Range rangeName="Speed" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {sidebar ? <Sidebar /> : ""}

        <div
          className={`wrapper-body bs-bg-content ${
            sidebar ? "sidebar-show" : ""
          } ${tabBar ? "tabbar-show" : ""}`}
          // style={{ marginTop: height }}
        >
          <TabPan tabIndex={1}>{props.children}</TabPan>
        </div>
      </Tabs>
    </div>
  );
}

export default SidebarNavbarWrapper;
