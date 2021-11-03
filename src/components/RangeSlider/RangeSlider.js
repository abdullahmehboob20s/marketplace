import React from "react";
import { Range, getTrackBackground } from "react-range";
import "./RangeSlider.css";

const STEP = 0.1;
const MIN = 0;
const MAX = 10;

class RangeSlider extends React.Component {
  state = {
    values: [0],
  };
  render(props) {
    return (
      <div className="range-slider">
        <p className="text-white fs-14px">{this.props.rangeName}:</p>
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,

                display: "flex",
                width: "100%",
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "8px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["#ccc", "#ccc"],
                    min: MIN,
                    max: MAX,
                  }),
                  alignSelf: "center",
                  marginLeft: "8px",
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "16px",
                width: "16px",
                borderRadius: "50%",
                backgroundColor: "#0D6EFD",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                outline: "none",
                position: "relative",
              }}
            >
              <div className="range-tooltip">
                {this.state.values[0].toFixed(3)}
              </div>
            </div>
          )}
        />
        {/* <output id="output">{this.state.values[0].toFixed(1)}</output> */}
      </div>
    );
  }
}

export default RangeSlider;
