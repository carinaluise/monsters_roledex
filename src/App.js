import React from 'react';
import {CardList} from './components/card_list/card_list.component';
import {SearchBar} from './components/search-bar/search-bar.component';
import './index.styles.css';
import {Title} from './components/title/title.component';

class App extends React.Component{

    constructor(){
      super();

      this.state = {
          monsters: [],
          searchField: ""
      }
    }

   componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({monsters : users}))
   } 


  render(){

    const{monsters, searchField} = this.state;

    const filteredMonsters= monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
      <div className="app">
      <Title title="Monsters Roledex"></Title>
      <SearchBar
      placeholder="search monsters"      
      handleChange={e =>{this.setState({searchField : e.target.value}, () => console.log(this.state))}}>
      </SearchBar>
      <CardList data={filteredMonsters}></CardList>
      </div>
    )
  }
}

export default App;
