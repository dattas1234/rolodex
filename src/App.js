import "./styles.css";
import { Component } from "react";
import { SearchBox } from "./components/searchBox/searchBox-component";
// import ReactDOM from 'react-dom';
import { CardList } from "./components/card-list/card-list-components";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      choise: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((charectors) => this.setState({ monsters: charectors }));
    // console.log(this.state)
  }
  render() {
    const { monsters, choise } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(choise.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monster...."
          handleChange={({ target }) => this.setState({ choise: target.value })}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
