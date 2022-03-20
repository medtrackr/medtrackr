import React, { Component } from 'react';
import { connect } from 'react-redux';
import Schedule from '../components/Schedule.jsx';
import Navbar from '../components/Navbar.jsx';
import AddMedicineContainer from '../containers/AddMedicineContainer.jsx';
import * as actions from '../actions/actions';
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
  addMedicineStatus: state.meds.addMedicineStatus,
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  addMedicine: () => {
    dispatch(actions.addMedicineActionCreator());
  },

  showSchedule: () => {
    dispatch(actions.showScheduleActionCreator());
  },
});

const conditionalRender = (cond, props) => {
  if (cond === true) return (<AddMedicineContainer />);
  return (<Schedule userMedicines = {props.userMedicines} />)
}

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h1 id="header">Home Container</h1>
          <Navbar firstName = {this.props.firstName} addMedicine = {this.props.addMedicine} showSchedule = {this.props.showSchedule} />
          {conditionalRender(this.props.addMedicineStatus, this.props)}
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);