import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

const ColorList = ({ colorList }) => {
    console.log(colorList)

    return (<>
        <h2>Colors are:</h2>
        <ul style={{ display: "flex", flexDirection: "column-reverse" }}>
            {colorList.map(color => {
                return <Link key={uuid()} to={`/colors/${color.name}`}><h3>{color.name}</h3></Link>
            })}

        </ul>
        <Link to="/colors/new">Add a color!</Link>
    </>)
}
export default ColorList