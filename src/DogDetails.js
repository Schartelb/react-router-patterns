import React from 'react'
import { useParams } from 'react-router-dom'


function DogDetails({ dogs }) {
    const {dogname} = useParams()
    const activeDog = dogs.filter(dog=>dog.name==dogname)
    console.log(dogs.filter(dog=>dog.name==dogname))
    console.log(Object.values(dogs))
    return (
        <>
        <h2>This is {dogname}</h2>
        <h4>{dogname} is {activeDog[0].age}</h4>
        <ol><h4>{dogname} Facts:</h4>
            {activeDog[0].facts.map(fact => <li>{fact}</li>)}
        </ol>
        </>
        )
}

export default DogDetails