import { ButtonCalc } from "../atoms"

const BodyCalc = ({buttonsCalc, dataButton}) => {
  const obtainDataButton = (data) => {
    dataButton(data);
  }
  return (
    <div className="calculator__buttons">
      <div className="buttons__container">
        {
          buttonsCalc.map((btn, index) => (
            <ButtonCalc key={index} objBtn={btn} clickAction={obtainDataButton} />
          ))
        }
      </div>
    </div>
  )
}

export default BodyCalc