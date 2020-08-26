import React from "react"

const ButtonSend = ({ clickHandler }) => {
    return (
        <div>
            <button onClick={clickHandler}> Sänd </button>
        </div>
    )
}

export default ButtonSend
