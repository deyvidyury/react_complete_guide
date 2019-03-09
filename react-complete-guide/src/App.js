import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephane", age: 26 }
    ]
  };

  switchNameHandler = () => {};
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name="Max" age="28" />
        <Person name="MAnu" age="29">
          My hobbies: Racing
        </Person>
        <Person name="Stephanie" age="26" />
      </div>
    );
  }
}

export default App;
