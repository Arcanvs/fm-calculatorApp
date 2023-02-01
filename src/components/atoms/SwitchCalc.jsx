import { useContext, useState } from "react";
import { ThemeContext } from "../pages/CalculatorPage";

const SwitchCalc = () => {
  const [checkOption, setCheckOption] = useState(1);
  const {switchClassTheme, setSwitchClassTheme} = useContext(ThemeContext);

  const handleChangeSteps = (value) => {
    console.log('mira rey ', value);
    setCheckOption(value);
    setSwitchClassTheme(`theme__${value}`);
  }
  return (
    <>
      <div class="switch__steps">
        <div className="steps__nums">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <div>
          <input checked={checkOption === 1} onChange={() => handleChangeSteps(1)} class="button" type="radio" name="toggle" id="step1" />
          <input checked={checkOption === 2} onChange={() => handleChangeSteps(2)} class="button" type="radio" name="toggle" id="step2" />
          <input checked={checkOption === 3} onChange={() => handleChangeSteps(3)} class="button" type="radio" name="toggle" id="step3" />
        </div>
      </div>
    </>
  )
}

export default SwitchCalc