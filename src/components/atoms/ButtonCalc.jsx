const ButtonCalc = ({objBtn, clickAction}) => {
    const handleClickAction = (data) => {
        clickAction(data)
    }
    return (
        <button className="button__calc" onClick={() => handleClickAction(objBtn)}>{objBtn.text}</button>
    )
}

export default ButtonCalc