import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import rareIcon from "assets/images/rare-icon.png";
import EpicIcon from "assets/images/epic-icon.png";
import legendaryIcon from "assets/images/legendary-icon.png";
import CheckBox from "components/CheckBox/CheckBox";
import Range from "components/Range/Range";

function Sidebar() {
  return (
    <div className="sidebar bs-bg-content">
      <div className="sidebar-header">
        <p className="fs-32px text-white weight-5 family-serif">Filter</p>
        <Link className="blue">Clear filter</Link>
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
  );
}

export default Sidebar;
