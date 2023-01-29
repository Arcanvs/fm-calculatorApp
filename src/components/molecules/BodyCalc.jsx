import { ButtonCalc } from "../atoms"

const BodyCalc = ({buttonsCalc, dataButton}) => {
  const obtainDataButton = (data) => {
    dataButton(data);
  }
  return (
    <div>
      {
        buttonsCalc.map((btn, index) => (
          <ButtonCalc key={index} objBtn={btn} clickAction={obtainDataButton} />
        ))
      }
    </div>
  )
}

export default BodyCalc