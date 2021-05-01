import { Component } from 'react';
import './Paging.css';

export default class Paging extends Component {

  handlePrevPage = () => this.props.onPaging(-1)

  handleNextPage = () => this.props.onPaging(1)
  
  render() {

    const { page } = this.props;
    return (
      <div className="Paging" onSubmit={this.handleSubmit}>
        
        <button className='previous' onClick={this.handlePrevPage} disabled={page < 2}>Prev</button>
        <span>Page {page}</span>
        <button className='next' onClick={this.handleNextPage}>Next</button>

      </div>
    );
  }

}