import React from "react"

const List = ({ item1, item2 }) => {
    return (
        <div>
            <ul>
                <li key={item1}>{item2.message}</li>
            </ul>
        </div>
    )
}

export default List
