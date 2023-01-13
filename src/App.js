import React, {Component} from 'react'
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import './App.css';
import DogList from './DogList';
import DogDetails from './DogDetails'


class App extends Component {
  static defaultProps = {
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

   render(){
  return (
    <div className="App">
      <nav >
        <NavLink to="/">Dog List</NavLink>
      </nav>
      <Switch>
        <Route exact path="/dogs" >
          <DogList dogs={this.props.dogs}/>
        </Route>
        <Route path="/dogs/:dogname" >
          <DogDetails dogs={this.props.dogs} /> // what props will this need?
        </Route>
        <Redirect to="/dogs" />
      </Switch>

    </div>
  );
  }}
export default App;
