import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { filterPetsByRange, setRangeValue } from "redux/petDetails";
import "./Range.css";

function Range(props) {
  const { rangeName } = props;
  const [rangeSlider, setRangeSlider] = React.useState(0);
  const { ranges, checkboxes } = useSelector((state) => state.petDetails);
  const dispatch = useDispatch();
  let data = {
    type: rangeName.toLowerCase(),
    value: parseInt(rangeSlider),
  };

  const handleSlider = (e) => {
    setRangeSlider(e.target.value);
    // dispatch(filterPetsByRange(data));
    dispatch(setRangeValue({ name: e.target.name, value: e.target.value }));
  };

  return (
    <div className="choose-range">
      <p className="text-white fs-14px">
        {rangeName}: {ranges[rangeName.toLowerCase()]}
      </p>
      <div className="range-wrap">
        <input
          type="range"
          className="form-range range"
          min="0"
          max={rangeName.toLowerCase() === "speed" ? "120" : "10000"}
          name={rangeName.toLowerCase()}
          onChange={handleSlider}
          value={ranges[rangeName.toLowerCase()]}
        />
        {/* <output
          className="bubble"
          style={{ left: `calc(${rangeSlider}% * 9 )` }}
        >
          {rangeSlider}
        </output> */}
      </div>
    </div>
  );
}

export default Range;
