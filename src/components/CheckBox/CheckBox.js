import React from "react";
import "./CheckBox.css";

function CheckBox(props) {
  const { img, title } = props;
  return (
    <div class="form-check">
      <input
        className="form-check-input js-ckbElement"
        type="checkbox"
        value=""
        id={title}
        name="elementForest"
      />
      <label className="form-check-label" for={title}>
        <img src={img} alt="Element Forest" /> <p>{title}</p>{" "}
      </label>
    </div>
  );
}

export default CheckBox;
