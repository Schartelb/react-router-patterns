import React from 'react'
import { Link } from 'react-router-dom'


function DogList({ dogs }) {
    const renderDogs = () => (dogs.map((dog) => (
      <>
        <Link  to={`/dogs/${dog.name}`}><h3>{dog.name}</h3></Link>
      </>
     )));
        // return <pre>{JSON.stringify(dogs[0].entries)}</pre>
    

    return (<div>
        {renderDogs()}
    </div>)
}

export default DogList