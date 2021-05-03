import React, { Component } from 'react';
import './PokeItem.css';

export default class PokeItem extends Component {
  
  render() {
    const { poke } = this.props;

    return (
      <li className="PokeItem">
        <h2>{poke.pokemon}</h2>

        <p className='hp'>HP: {poke.hp}</p>

        <p className='defense'>Defense: {poke.defense}</p>

        <img
          src={poke.url_image}
          alt='{poke.pokemon}'
        />
        
      </li>
    );
  }

}