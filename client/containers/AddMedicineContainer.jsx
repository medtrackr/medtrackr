import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import AddMedicineForm from '../components/AddMedicineForm.jsx';
import RemoveMedicineForm from '../components/RemoveMedicineForm.jsx';
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
  newMedicine: state.meds.newMedicine,
  breakfast: state.meds.breakfast,
  lunch: state.meds.lunch,
  dinner: state.meds.dinner,
  beforeBed: state.meds.beforeBed,
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  setNewMedicine: (newValue) => {
    dispatch(actions.setNewMedicineActionCreator(newValue));
  },
  addNewMedicine: () => {
    dispatch(actions.addNewMedicineActionCreator());
  },
  removeMedicine: (id) => {
    dispatch(actions.removeMedicineActionCreator(id));
  },
  updateScheduleCheckbox: (checkbox) => {
    dispatch(actions.updateScheduleCheckboxActionCreator(checkbox));
  },
});

class AddMedicineContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="schedule-box">
        <div className="medicine-box"> 
          <div>
            <div className="schedule-box-header">
              <h2>Add Medicine</h2>
            </div>
            <div className="add-medicine-box">
              <AddMedicineForm 
                setNewMedicine = {this.props.setNewMedicine} 
                newMedicine = {this.props.newMedicine} 
                addNewMedicine = {this.props.addNewMedicine}
                breakfast = {this.props.breakfast}
                lunch = {this.props.lunch}
                dinner = {this.props.dinner}
                beforeBed = {this.props.beforeBed}
                updateScheduleCheckbox = {this.props.updateScheduleCheckbox}
              />
            </div>
          </div>
          <div>
            <div className="schedule-box-header">
              <h2>Remove Medicine</h2>
            </div>
            <div className="add-medicine-box">
              <RemoveMedicineForm 
                userMedicines = {this.props.userMedicines}
                setNewMedicine = {this.props.setNewMedicine} 
                newMedicine = {this.props.newMedicine} 
                addNewMedicine = {this.props.addNewMedicine}
                removeMedicine = {this.props.removeMedicine}
                breakfast = {this.props.breakfast}
                lunch = {this.props.lunch}
                dinner = {this.props.dinner}
                beforeBed = {this.props.beforeBed}
                updateScheduleCheckbox = {this.props.updateScheduleCheckbox}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddMedicineContainer);