import React from "react"
import ButtonSend from "./ButtonSend"

const input = ({ clickHandler, messageInputField }) => {
    return (
        <div>
            <input ref={messageInputField} type="text" />
            <ButtonSend clickHandler={clickHandler} />
        </div>
    )
}

export default input
