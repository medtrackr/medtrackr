import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
// import TotalsDisplay from '../components/TotalsDisplay.jsx';
// import MarketsContainer from './MarketsContainer.jsx';

const mapStateToProps = state => ({
  // add pertinent state here
//   totalCards: state.markets.totalCards,
//   totalMarkets: state.markets.totalMarkets

});

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">Login Container</h1>
          { /* Start adding components here... */ }
          {/* <TotalsDisplay totalCards = {this.props.totalCards} totalMarkets = {this.props.totalMarkets} />
          <MarketsContainer /> */}
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, null)(LoginContainer);