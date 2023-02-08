const ButtonCalc = ({objBtn, clickAction}) => {
    const handleClickAction = (data) => {
        clickAction(data)
    }
    const delClass = objBtn.text === 'RESET' || objBtn.text === 'DEL' ? "delete" : null;
    const eqClass = objBtn.text === '=' ? "equal" : null;
    
    return (
        <button className={['button__calc',delClass, eqClass].join(' ')} onClick={() => handleClickAction(objBtn)}>
            <div>{objBtn.text}</div>
        </button>
    )
}

export default ButtonCalc