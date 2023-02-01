import { NavCalc, DisplayCalc, BodyCalc } from "../molecules";
import buttonsData from "../../data/buttonsData";
import { useState } from "react";

const CalculatorOrg = () => {
  const [displayNum, setDisplayNum] = useState('0');
  const [mathOperation, setMathOperation] = useState('');
  const [isOperator, setIsOperator] = useState(false);
  const [isDecimal, setIsDecimal] = useState(false);
  const [cleanDisplay, setCleanDisplay] = useState(false);

  const handleActionButton = (data) => {

    if(data.action === 'add'){
      if(displayNum === '0'){
        setDisplayNum(data.text)
      }else{
        if(isOperator){
          if(cleanDisplay){
            setDisplayNum(data.text);
            setCleanDisplay(false);
          }else{
            setDisplayNum(`${displayNum}${data.text}`);  
          }
        }else{
          setDisplayNum(`${displayNum}${data.text}`);
        }
      }
      mathOperation === '' ? setMathOperation(data.text) : setMathOperation(`${mathOperation}${data.text}`);
    }
    if(data.action === 'reset'){
      setDisplayNum('0');
      setMathOperation('');
      setIsDecimal(false);
    }
    if(data.action === 'remove'){
      let numDisplay = (displayNum.length - 1) === 0 ? '0' : displayNum.substring(0, displayNum.length - 1);
      let mathCalc = (mathOperation.length - 1) === 0 ? '' : mathOperation.substring(0, mathOperation.length - 1);
      setDisplayNum(numDisplay);
      setMathOperation(mathCalc);
    }
    if(data.action === 'sum'){
      operaciones(data.text);
    }
    if(data.action === 'subtract'){
      operaciones(data.text);
    }
    if(data.action === 'multiply'){
      operaciones('*');
    }
    if(data.action === 'division'){
      operaciones(data.text);
    }
    if(data.action === 'decimal'){
      if(!isDecimal){
        setIsDecimal(true);
        if(displayNum === '0'){
          setDisplayNum(`0${data.text}`);
        }else{
          if(isOperator){
            if(cleanDisplay){
              setDisplayNum(`0${data.text}`);
              setCleanDisplay(false);
            }else{
              setDisplayNum(`${displayNum}${data.text}`);  
            }
          }else{
            setDisplayNum(`${displayNum}${data.text}`);
          }
        }
        mathOperation === '' ? setMathOperation(data.text) : setMathOperation(`${mathOperation}${data.text}`);
      }
    }
    if(data.action === 'result'){
      let resultadoParcial = eval(mathOperation).toString();
      setMathOperation(`${resultadoParcial}`);
      setDisplayNum(resultadoParcial);
      setCleanDisplay(true);
    }

  }
  /* 
    if(data.action === 'decimal'){

    }
  */
  const operaciones = (value) => {
    if(isOperator){
      let resultadoParcial = eval(mathOperation).toString();
      setMathOperation(`${resultadoParcial}${value}`);
      setDisplayNum(resultadoParcial);
      setCleanDisplay(true);
    }else{
      setIsOperator(true);
      setCleanDisplay(true);
      setMathOperation(`${mathOperation}${value}`);
    }
    setIsDecimal(false);
  }
  return (
    <div className="calculator__body">
        <NavCalc />
        <DisplayCalc dataDisplay={displayNum} />
        <BodyCalc buttonsCalc={buttonsData} dataButton={handleActionButton}/>
    </div>
  )
}

export default CalculatorOrg