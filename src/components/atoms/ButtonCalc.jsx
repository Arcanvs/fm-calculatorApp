const ButtonCalc = ({objBtn, clickAction}) => {
    const handleClickAction = (data) => {
        clickAction(data)
    }
    return (
        <div onClick={() => handleClickAction(objBtn)}>{objBtn.text}</div>
    )
}

export default ButtonCalc