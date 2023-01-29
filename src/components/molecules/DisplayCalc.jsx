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
    <div>numero : {displayNum}</div>
  )
}

export default DisplayCalc