import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
// import AddMedicineForm from '../components/AddMedicineForm.jsx';
// import Schedule from '../components/Schedule.jsx';
// import Navbar from '../components/Navbar.jsx';
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

// const mapDispatchToProps = dispatch => ({
//   // create functions that will dispatch action creators
//   setNewMedicine: (newValue) => {
//     dispatch(actions.setNewMedicineActionCreator(newValue));
//   },
// });

class AddMedicineContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">
        <div className="outerBox">
          <h2 id="add-medicine">Add Medicine</h2>
          {/* <AddMedicineForm setNewMedicine = {this.props.setNewMedicine}/> */}
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, null)(AddMedicineContainer);