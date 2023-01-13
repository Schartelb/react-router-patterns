import React from 'react'
import { useParams } from 'react-router-dom'


function DogDetails() {
    const {name}=useParams()
    return alert(name)
}

export default DogDetails