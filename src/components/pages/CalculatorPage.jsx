import { useContext, createContext, useState } from "react"
import { CalculatorOrg } from "../organisms"

export const ThemeContext = createContext();

const CalculatorPage = () => {
  const [switchClassTheme, setSwitchClassTheme] = useState('theme__1');
  
  return (
    <div className={['calculator__app', switchClassTheme].join(' ')}>
      <ThemeContext.Provider value={{switchClassTheme, setSwitchClassTheme}} >  
        <CalculatorOrg />
      </ThemeContext.Provider>
    </div>
  )
}

export default CalculatorPage