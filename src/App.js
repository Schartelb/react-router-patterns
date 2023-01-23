import React, { useEffect, useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, NavLink, Redirect, useParams } from 'react-router-dom';
import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails'
import ColorPage from './ColorPage';
import ColorList from './ColorList';
import ColorForm from './ColorForm';


const App = () => {
  const defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: "whiskey",
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: "duke",
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: "perry",
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: "tubby",
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  }
  const INITIAL_COLORS = [{ name: "blue", hex: "#0000FF" }, { name: "red", hex: "#FF0000" }, { name: "green", hex: "#00FF00" }]
  const [colorList, setColorList] = useState(INITIAL_COLORS)
  useEffect(()=>{
    console.log(colorList)
  },[colorList])
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors/new">
            <ColorForm setColorList={setColorList} />
          </Route>
          <Route path="/colors/:colorname" >
            <ColorPage colorList={colorList}/>
          </Route>

          <Route path="/colors">
            <ColorList colorList={colorList} />
          </Route>
          <Redirect to="/colors" />
        </Switch>
        {/* <nav >
          <NavLink to="/">Dog List</NavLink>
        </nav>
        <Switch>
          <Route exact path="/dogs" >
            <DogList dogs={defaultProps.dogs}/>
          </Route>
          <Route path="/dogs/:dogname" >
            <DogDetails dogs={defaultProps.dogs} />
          </Route>
          <Redirect to="/dogs" />
        </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
