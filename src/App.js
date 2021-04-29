import { Component } from 'react';
import './App.css';
import React from 'react';
import request from 'superagent';
import Header from './Header';
import PokeList from './PokeList';
import Footer from './Footer';
import PokeSearch from './PokeSearch';

const POKEDEX_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex?page=3&perPage=50';
class App extends Component {

  state = {
    pokemon: [],
    setPokemon: []
  }

  async componentDidMount() {
    const response = await request.get(POKEDEX_API_URL);
    this.setState({ pokemon: response.body.results, setPokemon: response.body.results });
  }

  handleSearch = ({ searchField, sortField }) => {
    const nameRegex = new RegExp(searchField, 'i');
    const { setPokemon } = this.state;

    const searchedPoke = setPokemon
      .filter(poke => {
        return !searchField || poke.pokemon.match(nameRegex);
      })
      .sort((a, b) => {
        if (a[sortField] < b[sortField]) return -1;
        if (a[sortField] < b[sortField]) return 1;
        return 0;
      });
    this.setState({ pokemon: searchedPoke });
  }

  render() {
    const { pokemon } = this.state;
    return (
      <div className="App">
      
        <Header/>

        <section>
          <PokeSearch onSearch={ this.handleSearch }/>
          <PokeList pokemon={pokemon}/>
        </section>

        <Footer/>

      </div>
    );
  }

}

export default App;
