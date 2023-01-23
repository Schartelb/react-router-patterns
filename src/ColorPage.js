import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './ColorPage.css'

const ColorPage = (colorList) => {
    const { colorname } = useParams()
    const activecolor = colorList.colorList.filter(color=>color.name==colorname)
    return (
    <div id="colorpage" style={{backgroundColor:`${activecolor[0].hex}`}}>
        <h1>
            The Color is: {colorname}
        </h1>
        <Link to="/colors">Go to Color List</Link>
    </div >)
}

export default ColorPage