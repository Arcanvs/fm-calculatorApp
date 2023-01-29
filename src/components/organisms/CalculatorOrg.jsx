import { NavCalc, DisplayCalc, BodyCalc } from "../molecules";
import buttonsData from "../../data/buttonsData";
import { useState, useEffect } from "react";

const CalculatorOrg = () => {
  const [displayNum, setDisplayNum] = useState('0');
  const [mathOperation, setMathOperation] = useState('');
  const [isOperator, setIsOperator] = useState(false);
  const [cleanDisplay, setCleanDisplay] = useState(false);

  const handleActionButton = (data) => {
    console.log('ACTION :: ', data);
    console.log('Operacion ', mathOperation);
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
    }
    if(data.action === 'remove'){
      let numDisplay = (displayNum.length - 1) === 0 ? '0' : displayNum.substring(0, displayNum.length - 1);
      let mathCalc = (mathOperation.length - 1) === 0 ? '' : mathOperation.substring(0, mathOperation.length - 1);
      setDisplayNum(numDisplay);
      setMathOperation(mathCalc);
    }
    if(data.action === 'sum'){
      if(isOperator){
        console.log('ejecutar EVAL');
        let resultadoParcial = eval(mathOperation).toString();
        setMathOperation(`${resultadoParcial}${data.text}`);
        setDisplayNum(resultadoParcial);
        setCleanDisplay(true);
      }else{
        setIsOperator(true);
        setCleanDisplay(true);
        setMathOperation(`${mathOperation}${data.text}`);
      }
    }
  }
  /* 
  if(data.action === 'add'){
    
    }
    if(data.action === 'remove'){

    }
    if(data.action === 'sum'){

    }
    if(data.action === 'subtract'){

    }
    if(data.action === 'decimal'){

    }
    if(data.action === 'division'){

    }
    if(data.action === 'multiply'){

    }
    if(data.action === 'reset'){

    }
    if(data.action === 'result'){

    }
  */

  return (
    <div>
        <NavCalc />
        <DisplayCalc dataDisplay={displayNum} />
        <BodyCalc buttonsCalc={buttonsData} dataButton={handleActionButton}/>
    </div>
  )
}

export default CalculatorOrg