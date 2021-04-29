import React, { Component } from 'react';
import './PokeSearch.css';

export default class PokeSearch extends Component {
  state = { searchField: '', sortField: '' }
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {
    return (
      <form className="PokeSearch" onSubmit={this.handleSubmit}>

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