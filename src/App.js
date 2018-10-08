import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "asdf1", name: "Gabe", age: 31 },
      { id: "asjg2", name: "Jascha", age: 27 },
      { id: "adfs3", name: "Neji", age: 3 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      // findIndex is an array method just like map
      return p.id === id;
      // if the current item's id matches the id passed in,
      // store that index in personIndex
    });

    const person = {
      ...this.state.persons[personIndex]
      // bec we don't wanna change the original array, so we're making a copy
      // we're storing that indexed person and storing it in our person variable
    };
    // OR
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;
    // we're updating the person's name
    // we're still working with the copy, so we're not changing the state

    const persons = [...this.state.persons]; // making a copy of the state
    persons[personIndex] = person; // person on line 32

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      transition: ".1s",
      font: "inherit",
      color: "white",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      borderRadius: "8px"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangeHandler(event, person.id)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
    }

    // let classes = ["red", "bold"].join(" "); // outputs "red bold"
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Does this work now?")
    // );
  }
}

export default App;
