import { useState, useEffect } from "react";

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
        <div>{parseFloat(displayNum).toLocaleString()}</div>
      </div>  
    </div>
  )
}

export default DisplayCalc