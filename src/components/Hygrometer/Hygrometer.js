import { useContext } from "react";
import ReactSlider from "react-slider";
import { ClimateContext } from "../../context/ClimateContext";
import "./Hygrometer.css";

function Hygrometer() {
  const {hygro, setHygro, newHygro, setNewHygro} = useContext(ClimateContext)
  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {newHygro}%</div>
      <ReactSlider
        value={hygro}
        onAfterChange={(val) => {setHygro(prevHygro => val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;
