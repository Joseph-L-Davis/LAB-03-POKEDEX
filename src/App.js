import { Component } from 'react';
import './App.css';
import React from 'react';
import request from 'superagent';
import Header from './Header';
import PokeList from './PokeList';
import Footer from './Footer';
import PokeSearch from './PokeSearch';
import Paging from './Paging';

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

  async fetchPokemon() {
    const { search, page, sortField } = this.state;
    const response = await request
      .get(POKEDEX_API_URL)
      .query({ pokemon: search })
      .query({ sort: sortField })
      .query({ page: page });

    this.setState({ pokemon: response.body.results });
  }

  handleSearch = ({ searchField, sortField }) => {
    this.setState(
      { search: searchField, sortField: sortField },
      () => this.fetchPokemon()
    );
    // console.log(search);
  }
    
  handlePrevPage = () => {
    this.setState(
      { page: this.state.page - 1 },
      () => this.fetchPokemon()
    );
    console.log('prev');
  }

  handleNextPage = () => {
    this.setState(
      { page: this.state.page + 1 },
      () => this.fetchPokemon()
    );
    console.log('next');
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
