import React from "react";
import "./CheckBox.css";
import { useDispatch } from "react-redux";
import { filterPets } from "redux/petDetails";
import { useSelector } from "react-redux";

function CheckBox(props) {
  const { img, title } = props;
  const { checkboxes } = useSelector((state) => state.petDetails);
  const dispatch = useDispatch();

  const handleChange = (e, type) => {
    let isChecked = e.target.checked;
    if (isChecked) {
      dispatch(filterPets({ type, value: true }));
    } else {
      dispatch(filterPets({ type, value: false }));
    }
  };

  return (
    <div class="form-check">
      <input
        className="form-check-input js-ckbElement"
        type="checkbox"
        id={title}
        name="elementForest"
        checked={checkboxes[title.toLowerCase()]}
        onChange={(e) => handleChange(e, title.toLowerCase())}
      />
      <label className="form-check-label" for={title}>
        <img src={img} alt="Element Forest" />{" "}
        <p className="fs-14px">{title}</p>{" "}
      </label>
    </div>
  );
}

export default CheckBox;
