import React from "react";
import "./PetCard.css";
import LGEDToken from "assets/images/LGED Token.png";
import rareIcon from "assets/images/rare-icon.png";
import shieldIcon from "assets/images/shield-icon.png";
import wolfAnimation from "assets/images/wolf-animation.gif";
import speedIcon from "assets/images/speed-icon.png";
import attackIcon from "assets/images/attack-icon.png";
import hpIcon from "assets/images/hp-icon.png";
import { Link } from "react-router-dom";

function PetCard(props) {
  const { wrapper = true } = props;
  return (
    <div className={wrapper ? `card` : ""}>
      <div className="card-content">
        <div className="card-header">
          <div className="card-header-left">
            <img src={rareIcon} alt="" className="card-header-image" />
            <p className="noto-sans ">GALADRIEL</p>
          </div>

          <div className="card-header-right">
            <img src={shieldIcon} alt="" className="card-header-image" />
            <p className="noto-sans ">10</p>
          </div>
        </div>

        <div className="card-body">
          <div className="card-body-img">
            <img src={wolfAnimation} alt="" />
          </div>

          <div className="card-pet-stats">
            <div className="card-pet-stats-left">
              <img src={hpIcon} alt="" />
              <p>1</p>
            </div>
            <div className="card-pet-stats-right">
              <span class="sharp">#</span>
              65440
            </div>
          </div>
        </div>

        <div className="card-footer">
          <div className="card-footer-left">
            <img src={speedIcon} alt="" />
          </div>

          <div className="card-footer-right">
            <img src={attackIcon} alt="" />
            <p className="noto-sans ">1</p>
          </div>
        </div>
      </div>

      {wrapper ? (
        <h1 className="coin-badge">
          <img
            height="45px"
            src={LGEDToken}
            class="bs-staking-item-icon"
            alt="bmon"
          />{" "}
          <span class="badge bg-black">30</span>
        </h1>
      ) : (
        ""
      )}
    </div>
  );
}

export default PetCard;
