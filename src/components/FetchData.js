import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import List from "./List"
import ChatInput from "./ChatInput"

const FetchData = () => {
    const messages =
        "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json"
    const dataApi =
        " https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json"

    const [post, setPosts] = useState({})
    const messageInputField = useRef()

    const sendData = () => {
        axios.get(dataApi).then((res) => {
            setPosts(res.data)
        })
    }
    useEffect(() => {
        sendData()
    }, [])

    const clickHandler = () => {
        const data = {
            message: messageInputField.current.value,
        }
        messageInputField.current.value = " "

        fetch(messages, {
            method: "POST",
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                sendData()
            })
    }

    return (
        <div>
            <h1>The Lounge</h1>
            <input ref={messageInputField} type="text" />
            <button onClick={clickHandler}> Sänd </button>

            {post.messages &&
                Object.entries(post.messages)
                    .reverse()
                    .map((item, index) => {
                        return (
                            <List item1={item[0]} item2={item[1]} key={index} />
                        )
                    })}
        </div>
    )
}

export default FetchData
