import { useContext } from 'react';
import './LightSwitch.css';
import { ThemeContext } from '../../context/ThemeContext';

function LightSwitch() {
  const {themeName, setThemeName} = useContext(ThemeContext)

  console.log('light switch render--themeName: ', themeName)
  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={() => {setThemeName(prevTheme => 'day')}}>DAY</div>
      <div className="off" onClick={ () => { setThemeName(prevTheme => 'night')}}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;