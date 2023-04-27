import { useContext } from 'react';
import { ClimateContext } from '../../context/ClimateContext';
import './ClimateStats.css';

function ClimateStats() {
  const { newHygro, newTemp } = useContext(ClimateContext)

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {newTemp}°F
      </div>
      <div className="humidity">
        Humidity {newHygro}%
      </div>
    </div>
  )
}

export default ClimateStats;
