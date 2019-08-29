import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Clean the table",
        completed: false
      },
      {
        id: 2,
        title: "Get the grocery",
        completed: true
      },
      {
        id: 3,
        title: "Repair the car",
        completed: false
      }
    ]
  };

  render() {
    //console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
