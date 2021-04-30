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

  async componentDidMount() {
    this.handleSearch();
  }

  handleSearch = async (search) => {
    const response = await request(POKEDEX_API_URL)
      .query({ pokemon: search });
    this.setState({ pokemon: response.body.results });
  }

  handlePrevPage = () => {
    console.log('previous page');
  }

  handleNextPage = () => {
    console.log('next page');
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
