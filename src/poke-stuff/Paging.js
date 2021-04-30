import { Component } from 'react';
import './Paging.css';

export default class Paging extends Component {
  
  render() {

    const { page, onPrev, onNext } = this.props;
    return (
      <form className="Paging">
        
        <button className='previous' onClick={onPrev}>Prev</button>
        <span>Page {page}</span>
        <button className='next' onClick={onNext}>Next</button>

      </form>
    );
  }

}