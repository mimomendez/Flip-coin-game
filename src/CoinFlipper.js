import React, { Component } from 'react';
import './CoinFlipper.css';
import Coin from './Coin';

export class CoinFlipper extends Component {
  state = {
    total: 0,
    heads: 0,
    tail: 0,
    face: ''
  };
  flip = () => {
    // 0 heads - 1 tail
    const value = Math.floor(Math.random() * 2);
    this.setState(prevState => {
      return {
        face: value ? 'tail' : 'heads',
        total: prevState.total + 1,
        heads: value ? prevState.heads : prevState.heads + 1,
        tail: value ? prevState.tail + 1 : prevState.tail
      }
    })
  };
  reset = () => {
    this.setState({
      face: '',
      total: 0,
      heads: 0,
      tail: 0
    })
  };
  render() {
    return (
      <div className="CoinFlipper">
        <h1>Let's flip a coin!</h1>
        <button onClick={this.flip}>Flip me!</button>
        {this.state.face && <Coin face={this.state.face}/>}
        <div className="CoinFlipper-text">
          <p>{`Out of ${this.state.total} flips, there have been ${this.state.heads} heads and ${this.state.tail} tails`}</p>
        </div>
        <button onClick={this.reset} className="Reset">Reset</button>
      </div>
    )
  }
}

export default CoinFlipper;
