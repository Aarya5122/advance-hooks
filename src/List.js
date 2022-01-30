import React, { useEffect, useState } from "react"

const List = ({getItem}) => {

    const [listItems, setListItems] = useState([])
    useEffect(()=>{
        setListItems(getItem(5))
        console.log("New GetItem Function")
    },[getItem])

    return(
        <>
            <ul style={{listStyle: "none"}}>
                {listItems.map((item, index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button style={{marginBottom: "30px"}}> Dummy </button>
        </>
    )
}

export default List