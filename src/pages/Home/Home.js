import PetCard from "components/PetCard/PetCard";
import SidebarNavbarWrapper from "layouts/SidebarNavbarWrapper/SidebarNavbarWrapper";
import React, { useState } from "react";
import Pagination from "components/Pagination/Pagination";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterStats } from "redux/petDetails";

function Home() {
  let { data, filteredArray } = useSelector((state) => state.petDetails);
  const dispatch = useDispatch();

  let [showPerPage, setshowPerPage] = useState(12);
  let [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  return (
    <SidebarNavbarWrapper>
      <div>
        <div className="cards-header">
          <p className="fs-28px weight-5 noto-sans">
            Pets: {filteredArray?.length} pets
          </p>

          <select
            onClick={(e) => dispatch(filterStats(e.target.value))}
            class="price-select"
          >
            <option value="" disabled="">
              Select
            </option>
            <option value="Lowest Attack">Lowest Attack</option>
            <option value="Highest Attack">Highest Attack</option>
            <option value="Lowest Defence">Lowest Defence</option>
            <option value="Highest Defence">Highest Defence</option>
            <option value="Lowest HP">Lowest HP</option>
            <option value="Highest HP">Highest HP</option>
            <option value="Lowest Speed">Lowest Speed</option>
            <option value="Highest Speed">Highest Speed</option>
            <option value="Lowest Price">Lowest Price</option>
            <option value="Highest Price">Highest Price</option>
          </select>
        </div>

        <div className="cards">
          {filteredArray
            ?.slice(pagination.start, pagination.end)
            .map((pet, i) => (
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
