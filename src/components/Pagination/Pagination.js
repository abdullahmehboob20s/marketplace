import React, { useState, useEffect } from "react";
import "./Pagination.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, setCounter } from "redux/counter";

function Pagination(props) {
  let [showPerPage, setshowPerPage] = props.perPageState;
  let [pagination, setPagination] = props.paginationState;
  let { filteredArray } = useSelector((state) => state.petDetails);
  let { counter } = useSelector((state) => state.counter);
  let dispatch = useDispatch();

  useEffect(() => {
    let value = showPerPage * counter;

    setPagination({
      start: value - showPerPage,
      end: value,
    });
    console.log(counter);
  }, [counter]);

  let onButtonClick = (type) => {
    if (type === "prev") {
      if (counter !== 1) {
        dispatch(decrement());
      } else {
        return;
      }
    } else {
      let dividing = Math.ceil(filteredArray.length / showPerPage);
      if (dividing === counter) return;
      dispatch(increment());
    }
  };

  let handleChange = (e) => {
    // if (e.target.value < 1) {
    //   dispatch(setCounter(1));
    // }
    if (
      e.target.value >= 1 &&
      e.target.value <= Math.round(filteredArray.length / showPerPage)
    ) {
      dispatch(setCounter(e.target.value));
    }
  };

  return (
    <div className="pagination">
      <button
        onClick={() => onButtonClick("prev")}
        class={`pagination-btn rounded ${counter == 1 ? "disabled" : ""}`}
        id="btnPreviousPagination"
        aria-label="Previous"
        disabled=""
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          ></path>
        </svg>
      </button>

      <div className="pagination-input">
        <p className="pagination-title fs-16px">Page</p>
        <input
          type="text"
          className={`pagination-input rounded`}
          onChange={handleChange}
          onClick={(e) => e.target.select()}
          value={counter}
        />
        <p className="pagination-title fs-16px">
          of {Math.ceil(filteredArray?.length / showPerPage)}
        </p>
      </div>

      <button
        onClick={() => onButtonClick("next")}
        class={`pagination-btn rounded  ${
          counter == Math.round(filteredArray.length / showPerPage)
            ? "disabled"
            : ""
        }`}
        id="btnNextPagination"
        aria-label="Next"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-arrow-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
