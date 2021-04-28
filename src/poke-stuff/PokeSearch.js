import { Component } from 'react';
import './PokeSearch.css';

export default class PokeSearch extends Component {
  
  render() {
    return (
      <form className="PokeSearch">

        <input className='searchField'></input>

        <select name='sortField'>
          <option value=''>Sort By...</option>
          <option value='Name'>Name</option>
          <option value='Type'>Type</option>
        </select>

        <button>Search</button>
        
      </form>
    );
  }

}