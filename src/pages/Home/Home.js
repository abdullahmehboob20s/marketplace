import PetCard from "components/PetCard/PetCard";
import SidebarNavbarWrapper from "layouts/SidebarNavbarWrapper/SidebarNavbarWrapper";
import React from "react";
import "./Home.css";

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
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </div>
    </SidebarNavbarWrapper>
  );
}

export default Home;
