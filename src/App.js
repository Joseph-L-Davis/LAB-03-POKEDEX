import { Component } from 'react';
import './App.css';
import React from 'react';
import request from 'superagent';
import Header from './Header';
import PokeList from './PokeList';
import Footer from './Footer';

const POKEDEX_API_URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';
class App extends Component {

  state = {
    pokemon:[]
  }

  async componentDidMount() {
    const response = await request.get(POKEDEX_API_URL);
    console.log(response);
  }

  render() {
    return (
      <div className="App">
      
        <Header/>
        <PokeList/>
        <Footer/>

      </div>
    );
  }

}

export default App;
