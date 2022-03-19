import React, { Component } from 'react';
import { connect } from 'react-redux';
import Schedule from '../components/Schedule.jsx';
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


const mapStateToProps = state => ({
  firstName: state.meds.firstName,
  lastName: state.meds.lastName,
  email: state.meds.email,
  userMedicines: state.meds.userMedicines,
});

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">Home Container</h1>
          <Schedule userMedicines = {this.props.userMedicines} />
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, null)(HomeContainer);