import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import rareIcon from "assets/images/rare-icon.png";
import EpicIcon from "assets/images/epic-icon.png";
import legendaryIcon from "assets/images/legendary-icon.png";
import CheckBox from "components/CheckBox/CheckBox";
import Range from "components/Range/Range";
import { useDispatch } from "react-redux";
import { filterPets } from "redux/petDetails";
import RangeSlider from "components/RangeSlider/RangeSlider";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className="sidebar bs-bg-content">
      <div className="sidebar-wrapper">
        <div className="sidebar-header">
          <p className="fs-28px text-white weight-5 family-serif">Filter</p>
          <div
            className="blue pointer fs-16px"
            onClick={() => dispatch(filterPets("all"))}
          >
            Clear filter
          </div>
        </div>

        {/* checkboxes */}
        <div className="filter-elements">
          <p className="text-white fs-14px">Type:</p>
          <div className="filter-checkboxes">
            <CheckBox img={rareIcon} title="Rare" />
            <CheckBox img={EpicIcon} title="Epic" />
            <CheckBox img={legendaryIcon} title="Legendary" />
          </div>
        </div>

        {/* range-sliders */}
        <div className="choose-range-wrapper">
          {/* <Range rangeName="Attack" />
          <Range rangeName="Defence" />
          <Range rangeName="HP" />
          <Range rangeName="Speed" /> */}

          <RangeSlider rangeName="Attack" />
          <RangeSlider rangeName="Defence" />
          <RangeSlider rangeName="HP" />
          <RangeSlider rangeName="Speed" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
