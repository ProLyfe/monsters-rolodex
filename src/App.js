import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [
        { name: 'Frankenstein'},
        { name: 'Dracula'},
        { name: 'Zombie'}
      ],
      monsters: [],
      searchField: ''
    };
  };
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(res => res.json())
      .then(data => this.setState({ monsters: data}))
      
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render(){
    const { monsters, searchField } = this.state;
    // MEME CHOSE const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )


    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
          <SearchBox handleChange={this.handleChange} placeholder='search monsters'/>
        <CardList monsters={filteredMonsters} />
    </div>
    )
  }
}

export default App;
