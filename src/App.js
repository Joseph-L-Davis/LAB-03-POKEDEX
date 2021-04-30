import { Component } from 'react';
import './App.css';
import React from 'react';
import request from 'superagent';
import Header from './Header';
import PokeList from './PokeList';
import Footer from './Footer';
import PokeSearch from './PokeSearch';
import Paging from './poke-stuff/Paging';

const POKEDEX_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
class App extends Component {
// Comment to commit to sortBranch
  state = {
    pokemon: [],
    page: 1
  }

  componentDidMount() {
    this.fetchPokemon();
    console.log('mount');
  }

  async fetchPokemon(search) {
    const response = await request
      .get(POKEDEX_API_URL)
      .query({ pokemon: search });

    this.setState({ pokemon: response.body.results });
    console.log('fetch');
  }

  handleSearch = ({ search }) => {
    this.fetchPokemon(search);
    console.log('handle');
  }
    
    
  

  handlePrevPage = () => {
    this.setState(state => {
      return { page: Math.max(state.page - 1, 1) };
    });
  }

  handleNextPage = () => {
    this.setState(state => {
      return { page: state.page + 1 };
    });
  }

  render() {
    const { pokemon, page } = this.state;

    return (
      <div className="App">
      
        <Header/>

        <section>
          <PokeSearch onSearch={this.handleSearch}/>
          <Paging
            page={page}
            onPrev={this.handlePrevPage}
            onNext={this.handleNextPage}
          />
          <PokeList pokemon={pokemon}/>
        </section>

        <Footer/>

      </div>
    );
  }

}

export default App;
