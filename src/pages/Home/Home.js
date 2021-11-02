import PetCard from "components/PetCard/PetCard";
import SidebarNavbarWrapper from "layouts/SidebarNavbarWrapper/SidebarNavbarWrapper";
import React, { useState } from "react";
import Pagination from "components/Pagination/Pagination";
import "./Home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  let { data } = useSelector((state) => state.petDetails);
  let [showPerPage, setshowPerPage] = useState(8);
  let [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  return (
    <SidebarNavbarWrapper>
      <div>
        <div className="cards-header">
          <p className="fs-32px weight-5 noto-sans">Pets: {data.length} pets</p>

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
          {data.slice(pagination.start, pagination.end).map((pet, i) => (
            <Link key={i} to={{ pathname: "/pet-details", petData: pet }}>
              <PetCard petData={pet} />
            </Link>
          ))}
        </div>

        <Pagination
          perPageState={[showPerPage, setshowPerPage]}
          paginationState={[pagination, setPagination]}
        />
      </div>
    </SidebarNavbarWrapper>
  );
}

export default Home;
