import React from 'react';
import {render} from 'react-dom';
import Submit from './Submit'

class AuctionLedger extends React.Component {
  render () {
    return (
      <div>
        <h1>{this.props.type}</h1>
        <Submit type = {this.props.type} price='20' />
        <Submit type = {this.props.type} price="25" />
      </div>
    )
  }
}

module.exports = AuctionLedger
