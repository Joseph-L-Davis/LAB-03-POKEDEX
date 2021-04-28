import React, { Component } from 'react';
import './PokeItem.css';

export default class PokeItem extends Component {
  
  render() {
    const { poke } = this.props;

    return (
      <li className="PokeItem">
        <h2>{poke.pokemon}</h2>

        <p className='shape'>{poke.shape}</p>

        <p className='type'>{poke.type_1}</p>

        <img
          src={poke.url_image}
          alt='{poke.pokemon}'
        />
        
      </li>
    );
  }

}