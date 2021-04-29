import { Component } from 'react';
import './App.css';
import React from 'react';
import request from 'superagent';
import Header from './Header';
import PokeList from './PokeList';
import Footer from './Footer';
import PokeSearch from './PokeSearch';

const POKEDEX_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
class App extends Component {

  state = {
    pokemon: []
  }

  async componentDidMount() {
    const response = await request.get(POKEDEX_API_URL);
    this.setState({ pokemon: response.body.results });
    console.log(response.body.results);
  }

  render() {
    const { pokemon } = this.state;
    return (
      <div className="App">
      
        <Header/>
        <main>

          <PokeSearch/>
          <PokeList pokemon={pokemon}/>

        </main>
        <Footer/>

      </div>
    );
  }

}

export default App;
