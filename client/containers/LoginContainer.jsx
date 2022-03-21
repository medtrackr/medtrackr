import React, { Component } from 'react';
import { connect } from 'react-redux';
// import from child components...
// import TotalsDisplay from '../components/TotalsDisplay.jsx';
// import MarketsContainer from './MarketsContainer.jsx';

// const initialState = {
//   userId: 123,
//   firstName: 'Trey',
//   lastName: 'Lewis',
//   email: 'treylewis@gmail.com',
//   userMedicines: [{medicineId: 1, medicineName: 'Sentret', medicineSchedule: {breakfast: true, lunch: false, dinner: false, beforeBed: true}}]
// };

// const mapStateToProps = state => ({
//   firstName: state.meds.firstName,
//   lastName: state.meds.lastName,
//   email: state.meds.email,
//   userMedicines: state.meds.userMedicines,
// });

// class LoginContainer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return(
//       <div className="container">
//         <div className="outerBox">
//           <h1 id="header">Login Container</h1>
//           { /* Start adding components here... */ }
//           {/* <TotalsDisplay totalCards = {this.props.totalCards} totalMarkets = {this.props.totalMarkets} />
//           <MarketsContainer /> */}
//         </div>
//       </div>
//     );
//   }

// }

class LoginBox extends Component {
  constructor(props) {
    super(props);
  }

  submitLogin(e) {
  
  }
  render() {
    return(
    <div className="inner-container">
      <div className="header">
        Login
      </div>
      <div className="innerBox"> 

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" className="login-input" placeholder="Username"/>
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" className ="login-input" placeholder="Password"/>
        </div>

        <button type="button" className="login-button" onClick={this.submitLogin.bind(this)}>Login</button>


      </div>
    </div>
    );
  }
}

export default connect(mapStateToProps, null)(LoginContainer, LoginBox);