import React from "react";

const TransHistory = ({item}) => {
    return (
        <li>{item.id} {item.type}</li>
    )
}

export default TransHistory;