import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const ColorForm = ({ setColorList }) => {
    const [formData, setFormData] = useState("")

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const history = useHistory()

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const { name, hex } = formData
        setColorList(colorList => { 
            const old = [...colorList];
            old.push({ "name": name, "hex": hex });
            return old
        })
        
        history.push(`/colors/${name}`)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Color Name: </label>
                <input id="name"
                    name="name"
                    type="text"
                    value={formData.value}
                    placeholder="blurple"
                    onChange={handleChange}
                    required
                ></input>
                <input name="hex"
                    type="color"
                    value={formData.value}
                    onChange={handleChange}
                    required></input>
                <button>Add Color!</button>
            </form>
            <Link to='/colors'>Back to Color List</Link>
        </>
    )
}
export default ColorForm