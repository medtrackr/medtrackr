import React from 'react';

// changes value when schedule checkbox is checked
const handleOnChange = (name, time, func) => {
  time = !time;
  func({[name]: time});
}

const AddMedicineForm = ({
  setNewMedicine, // Add the name of the new medicine to the state when the form is filled
  newMedicine, // Name of new medicine
  addNewMedicine, // Add the new medicine to the state
  breakfast, //state of checkbox
  lunch, //state of checkbox
  dinner, //state of checkbox
  beforeBed, //state of checkbox
  updateScheduleCheckbox, // function to update state of checkbox 
}) => (
  <div className="add-medicine-form">
    <div className="add-medicine-form-data">
      <div>
        <div>Name of Medicine:</div><input onChange={e => { setNewMedicine(e.target.value)}} value={newMedicine} type="text" />
      </div>
      <div>
        <div>Schedule:</div>
        <div><input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={() => {handleOnChange('breakfast', breakfast, updateScheduleCheckbox)}} /><label>Breakfast</label></div>
        <div><input type="checkbox" name="lunch" id="lunch" checked={lunch} onChange={() => {handleOnChange('lunch', lunch, updateScheduleCheckbox)}} /><label>Lunch</label></div>
        <div><input type="checkbox" name="dinner" id="dinner" checked={dinner} onChange={() => {handleOnChange('dinner', dinner, updateScheduleCheckbox)}} /><label>Dinner</label></div>
        <div><input type="checkbox" name="beforeBed" id="beforeBed" checked={beforeBed} onChange={() => {handleOnChange('beforeBed', beforeBed, updateScheduleCheckbox)}} /><label>Before Bed</label></div>
      </div>
    </div>
    <div className="add-medicine-button">
      <button onClick={() => { addNewMedicine() }}>Add Medicine</button>
    </div>
  </div>
);

export default AddMedicineForm;