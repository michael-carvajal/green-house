// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%

const { createContext, useState, useEffect } = require("react");

export const ClimateContext = createContext()
// console.log(ClimateContext.Provider, ClimateContext);
const ClimateProvider = ({children}) => {
    const [temp, setTemp] = useState(50);
    const [hygro, setHygro] = useState(40);
    const [newTemp, setNewTemp] = useState(temp);
    const [newHygro, setNewHygro] = useState(hygro);
    useEffect(() => {

        const timeOut = setTimeout(() => {
            if (temp > newTemp) {
                setNewTemp(prev => prev + 1)
            }
            if (temp < newTemp) {
                setNewTemp(prev => prev - 1)

            }
        }, 1000);
        return () => clearInterval(timeOut)
    }, [newTemp, temp]);
    useEffect(() => {

        const timeOut = setTimeout(() => {
            if (hygro > newHygro) {
                setNewHygro(prev => prev + 1)
            }
            if (hygro < newHygro) {
                setNewHygro(prev => prev - 1)

            }
        }, 1000);
        return () => clearInterval(timeOut)
    }, [newHygro, hygro]);
    return (
        <ClimateContext.Provider value={{temp, setTemp,hygro, setHygro, newTemp, setNewTemp, newHygro, setNewHygro }}>
            {children}
        </ClimateContext.Provider>
    )
}
export default ClimateProvider
