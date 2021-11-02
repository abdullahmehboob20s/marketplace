import React from "react";
import "./PetCard.css";
import LGEDToken from "assets/images/LGED Token.png";
import shieldIcon from "assets/images/shield-icon.png";
import speedIcon from "assets/images/speed-icon.png";
import attackIcon from "assets/images/attack-icon.png";
import hpIcon from "assets/images/hp-icon.png";

function PetCard(props) {
  const { wrapper = true } = props;
  const { bg, typeIcon, gif, petId, petName, hp, attack, defence, speed } =
    props?.petData;
  return (
    <div className={wrapper ? `card` : ""}>
      <div
        className="card-content"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="card-header">
          <div className="card-header-left">
            <img src={typeIcon} alt="" className="card-header-image" />
            <p className="noto-sans ">{petName}</p>
          </div>

          <div className="card-header-right">
            <img src={shieldIcon} alt="" className="card-header-image" />
            <p className="noto-sans ">{defence}</p>
          </div>
        </div>

        <div className="card-body">
          <div className="card-body-img">
            <img src={gif} alt="" />
          </div>

          <div className="card-pet-stats">
            <div className="card-pet-stats-left">
              <img src={hpIcon} alt="" />
              <p>{hp}</p>
            </div>
            <div className="card-pet-stats-right">
              <span class="sharp">#</span>
              {speed}
            </div>
          </div>
        </div>

        <div className="card-footer">
          <div className="card-footer-left">
            <img src={speedIcon} alt="" />
          </div>

          <div className="card-footer-right">
            <img src={attackIcon} alt="" />
            <p className="noto-sans ">{attack}</p>
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
