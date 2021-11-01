import PetCard from "components/PetCard/PetCard";
import SidebarNavbarWrapper from "layouts/SidebarNavbarWrapper/SidebarNavbarWrapper";
import React from "react";
import Pagination from "components/Pagination/Pagination";
import "./Home.css";
import { Link } from "react-router-dom";

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
        <Link to="/pet-details">
          <PetCard />
        </Link>
        <Link to="/pet-details">
          <PetCard />
        </Link>
        <Link to="/pet-details">
          <PetCard />
        </Link>
        <Link to="/pet-details">
          <PetCard />
        </Link>
        <Link to="/pet-details">
          <PetCard />
        </Link>
        <Link to="/pet-details">
          <PetCard />
        </Link>
        <Link to="/pet-details">
          <PetCard />
        </Link>
        <Link to="/pet-details">
          <PetCard />
        </Link>
      </div>

      <Pagination />
    </SidebarNavbarWrapper>
  );
}

export default Home;
