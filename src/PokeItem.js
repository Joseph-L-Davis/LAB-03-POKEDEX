import { Component } from 'react';
import './PokeItem.css';

export default class PokeItem extends Component {
  
  render() {
    return (
      <li className="PokeItem">
        <h2>Bulbasaur</h2>

        <p className='shape'>Quadruped</p>

        <p className='type'>Grass</p>

        <img
          src='http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
          alt='Bulbasaur'
        />
        
      </li>
    );
  }

}