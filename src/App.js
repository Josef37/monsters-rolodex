import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.components";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => this.setState({ monsters }));
  }

  getFilteredMonsters() {
    const { monsters, searchField } = this.state;
    return monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          placeholder="Search Monsters"
        />
        <CardList monsters={this.getFilteredMonsters()} />
      </div>
    );
  }
}

export default App;
