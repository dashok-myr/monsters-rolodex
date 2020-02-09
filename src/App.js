import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ monsters: users });
      });
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
      <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
