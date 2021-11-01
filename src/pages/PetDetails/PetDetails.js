import PetCard from "components/PetCard/PetCard";
import SidebarNavbarWrapper from "layouts/SidebarNavbarWrapper/SidebarNavbarWrapper";
import React from "react";
import { Link } from "react-router-dom";
import "./PetDetails.css";

function PetDetails() {
  return (
    <SidebarNavbarWrapper sidebar={false} tabBar={false}>
      <div className="pet-details-wrapper ">
        <Link to="/" className="pet-detail-back-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            ></path>
          </svg>
          Back
        </Link>

        <div className="pet-details">
          {/* <div className="pet-d-card"> */}
          <PetCard wrapper={false} />
          {/* </div> */}

          <div className="pet-details-content">
            <div class="title-view-card">
              <h3 class="fs-5 mt-2">NFT FOR SALE</h3>
            </div>

            <p className="text-white">Coming Soon</p>
          </div>
        </div>
      </div>
    </SidebarNavbarWrapper>
  );
}

export default PetDetails;
