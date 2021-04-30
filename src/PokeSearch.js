import React, { Component } from 'react';
import './PokeSearch.css';

export default class PokeSearch extends Component {
  state = { searchField: '', sortField: '' }

  handleSortField = ({ target }) =>
    this.setState({ sortField: target.value })

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state);
    // this.handleSearchField();
    // const onSearch = this.props.onSearch;
    // const searchField = this.state.searchField;
    // onSearch(searchField);
  }

    handleSearchField = ({ target }) => {
      this.setState({ searchField: target.value });
    }


    render() {
      const { searchField, sortField } = this.state;

      return (
        <form className="PokeSearch" onSubmit={this.handleSubmit}>

          <input className='searchField'
            value={searchField}
            onChange={ this.handleSearchField }   
          />

          <select name='sortField'
            value={sortField}
            onChange={ this.handleSortField }>
            <option value=''>Sort By...</option>
            <option value='pokemon'>Name</option>
            <option value='hp'>HP</option>
          </select>

          <button>Search</button>
        
        </form>
      );
    }

}