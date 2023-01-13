import React from 'react'
import { useParams } from 'react-router-dom'


function DogDetails({ dogs }) {
    const { dogname } = useParams()
    return (
        <h2>This is {dogname}</h2>
    )
}

export default DogDetails