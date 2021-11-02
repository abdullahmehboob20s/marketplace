import React from "react";
import "./Range.css";

function Range(props) {
  const { rangeName } = props;
  const [rangeSlider, setRangeSlider] = React.useState(0);

  const handleSlider = (e) => {
    setRangeSlider(e.target.value);
  };

  return (
    <div className="choose-range">
      <p className="text-white fs-14px">{rangeName}:</p>
      <div className="range-wrap">
        <input
          type="range"
          className="form-range range"
          min="0"
          max="10"
          onChange={handleSlider}
          value={rangeSlider}
        />
        <output
          className="bubble"
          style={{ left: `calc(${rangeSlider}% * 9 )` }}
        >
          {rangeSlider}
        </output>
      </div>
    </div>
  );
}

export default Range;
