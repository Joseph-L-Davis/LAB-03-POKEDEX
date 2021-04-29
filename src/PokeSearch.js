import React, { Component } from 'react';
import './PokeSearch.css';

export default class PokeSearch extends Component {
  state = { searchField: '' }
  
  handleSearchField = ({ target }) => {
    this.setState({ searchField: target.value });
  }

  componentDidMount() {
    const { searchField } = this.props;
    this.setState({ searchField: searchField });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state);
  }


  render() {
    const { searchField, sortField } = this.state;

    return (
      <form className="PokeSearch" onSubmit={this.handleSubmit}>

        <input className='searchField'
          value={searchField}
          onChange={ this.handleSearchField }></input>

        <select name='sortField'
          value={sortField}
          onChange={ this.handleSortField }>
          <option value=''>Sort By...</option>
          <option value='Name'>Name</option>
          <option value='HP'>HP</option>
        </select>

        <button>Search</button>
        
      </form>
    );
  }

}