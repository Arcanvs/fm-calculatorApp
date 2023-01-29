import { useState, useEffect } from "react";
import { InputCalc } from "../atoms"

const DisplayCalc = ({dataDisplay}) => {
  const [displayNum, setDisplayNum] = useState('0');
  useEffect(() => {
    if(dataDisplay !== undefined){
      setDisplayNum(dataDisplay);
    }
  }, [dataDisplay]);
  return (
    <div className="calculator__display">
      <div className="display">
        {displayNum}
      </div>  
    </div>
  )
}

export default DisplayCalc