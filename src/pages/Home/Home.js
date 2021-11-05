import PetCard from "components/PetCard/PetCard";
import SidebarNavbarWrapper from "layouts/SidebarNavbarWrapper/SidebarNavbarWrapper";
import React, { useState } from "react";
import Pagination from "components/Pagination/Pagination";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterStats } from "redux/petDetails";

function Home() {
  let { filteredArray, selectValue } = useSelector((state) => state.petDetails);
  const dispatch = useDispatch();
  const [show, setshow] = useState(false);
  const [dropdownValue, setdropdownValue] = useState("");
  const menuRef = React.useRef();

  let [showPerPage, setshowPerPage] = useState(12);
  let [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  React.useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setshow(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const selectDropdownValue = (value) => {
    setdropdownValue(value);
    setshow(false);
    dispatch(filterStats(value));
  };

  return (
    <SidebarNavbarWrapper>
      <div>
        <div className="cards-header">
          <p className="fs-28px weight-5 noto-sans">
            Pets: {filteredArray?.length} pets
          </p>

          <div className="price-select" ref={menuRef}>
            <div
              className={`price-select-btn ${show ? "active" : ""}`}
              onClick={() => setshow(!show)}
            >
              {selectValue}{" "}
              <span className="price-select-btn-arrow"> {">"} </span>
            </div>
            <div className={`price-select-dropdown ${show ? "show" : ""}`}>
              <div
                onClick={() => selectDropdownValue("None")}
                className="price-select-dropdown-item"
              >
                None
              </div>
              <div
                onClick={() => selectDropdownValue("Lowest Attack")}
                className="price-select-dropdown-item"
              >
                Lowest Attack
              </div>
              <div
                onClick={() => selectDropdownValue("Highest Attack")}
                className="price-select-dropdown-item"
              >
                Highest Attack
              </div>
              <div
                onClick={() => selectDropdownValue("Lowest Defence")}
                className="price-select-dropdown-item"
              >
                Lowest Defence
              </div>
              <div
                onClick={() => selectDropdownValue("Highest Defence")}
                className="price-select-dropdown-item"
              >
                Highest Defence
              </div>
              <div
                onClick={() => selectDropdownValue("Lowest HP")}
                className="price-select-dropdown-item"
              >
                Lowest HP
              </div>
              <div
                onClick={() => selectDropdownValue("Highest HP")}
                className="price-select-dropdown-item"
              >
                Highest HP
              </div>
              <div
                onClick={() => selectDropdownValue("Lowest Speed")}
                className="price-select-dropdown-item"
              >
                Lowest Speed
              </div>
              <div
                onClick={() => selectDropdownValue("Highest Speed")}
                className="price-select-dropdown-item"
              >
                Highest Speed
              </div>
              <div
                onClick={() => selectDropdownValue("Lowest Price")}
                className="price-select-dropdown-item"
              >
                Lowest Price
              </div>
              <div
                onClick={() => selectDropdownValue("Highest Price")}
                className="price-select-dropdown-item"
              >
                Highest Price
              </div>
            </div>
          </div>
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
