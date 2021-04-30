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
// Comment to commit to sortBranch
  state = {
    pokemon: []
  }

  async componentDidMount() {
    this.handleSearch();
    // const response = await request.get(POKEDEX_API_URL);
    // this.setState({ pokemon: response.body.results });
  }

  handleSearch = async (search) => {
    const response = await request(POKEDEX_API_URL)
      .query({ pokemon: search });
    this.setState({ pokemon: response.body.results });
  }

  render() {
    const { pokemon } = this.state;

    return (
      <div className="App">
      
        <Header/>

        <section>
          <PokeSearch onSearch={this.handleSearch}/>
          <PokeList pokemon={pokemon}/>
        </section>

        <Footer/>

      </div>
    );
  }

}

export default App;
