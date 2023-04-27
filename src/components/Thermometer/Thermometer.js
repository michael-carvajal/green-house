import { useContext, useEffect, useState } from "react";
import ReactSlider from "react-slider";
import { ClimateContext } from "../../context/ClimateContext";
import './Thermometer.css';

function Thermometer() {
  const { temp, setTemp, newTemp, setNewTemp } = useContext(ClimateContext);
 

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {newTemp}°F</div>
      <ReactSlider
        value={temp}
        onAfterChange={(val) => {
          setTemp(prevTemp => val)
        }}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;
