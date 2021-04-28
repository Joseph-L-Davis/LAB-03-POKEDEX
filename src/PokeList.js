import { Component } from 'react';
import PokeItem from './PokeItem';
import './PokeList.css';

export default class PokeList extends Component {
  
  render() {
    return (
      <div className="PokeList">
        <PokeItem/>
      </div>
    );
  }

}