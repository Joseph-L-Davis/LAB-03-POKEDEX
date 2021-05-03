import React, { Component } from 'react';
import PokeItem from './PokeItem';
import './PokeList.css';

export default class PokeList extends Component {
  
  render() {
    const { pokemon } = this.props;
    
    return (
      <ul className="PokeList">
        {pokemon.map(poke => (
          <PokeItem key={poke._id} poke={poke}/>
        ))}
      </ul>
    );
  }

}