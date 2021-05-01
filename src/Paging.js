import { Component } from 'react';
import './Paging.css';

export default class Paging extends Component {
  state = { prevPage: 1, nextPage: 1 }

  handlePrevPage = ({ target }) =>
    this.setState({ prevPage: target.value })

  handleNextPage = ({ target }) =>
    this.setState({ NextPage: target.value })
  
  render() {

    const { page, onPrev, onNext } = this.props;
    return (
      <form className="Paging">
        
        <button className='previous' onClick={onPrev} disabled={page < 2}>Prev</button>
        <span>Page {page}</span>
        <button className='next' onClick={onNext}>Next</button>

      </form>
    );
  }

}