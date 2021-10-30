import SidebarNavbarWrapper from "layouts/SidebarNavbarWrapper/SidebarNavbarWrapper";
import React from "react";
import "./Home.css";
import LGEDToken from "assets/images/LGED Token.png";

function Home() {
  return (
    <SidebarNavbarWrapper>
      <div className="cards-header">
        <p className="fs-32px weight-5 noto-sans">Pets: 1115 pets</p>

        <div class="btn-toolbar text-white">
          <select class="price-select" id="cmbFilterSort">
            <option value="powerAsc">Lowest Attack</option>
            <option value="powerDesc">Highest Attack</option>
            <option value="" selected="">
              Lowest Defence
            </option>
            <option value="priceDesc">Highest Defence</option>
            <option value="" selected="">
              Lowest HP
            </option>
            <option value="priceDesc">Highest HP</option>
            <option value="priceDesc">Lowest Speed</option>
            <option value="priceDesc">Highest Speed</option>
            <option value="priceDesc">Lowest Price</option>
            <option value="priceDesc">Highest Price</option>
          </select>
        </div>
      </div>

      <div className="cards">
        <div className="card card-binamon">
          <div className="card-content ">
            <div class="info-top noto-sans ">
              POWER <span class="value noto-sans">2</span>
            </div>
          </div>

          <h1 className="coin-badge">
            <img
              height="45px"
              src={LGEDToken}
              class="bs-staking-item-icon"
              alt="bmon"
            />{" "}
            <span class="badge bg-black">30</span>
          </h1>
        </div>
      </div>
    </SidebarNavbarWrapper>
  );
}

export default Home;
