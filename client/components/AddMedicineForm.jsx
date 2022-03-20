import React from 'react';
// import { ProgressPlugin } from 'webpack';

const AddMedicineForm = ({
  setNewMedicine, // Add the name of the new medicine to the state when the form is filled
  newMedicine, // Name of new medicine
  addNewMedicine, // Add the new medicine to the state
}) => (
  <div className="add-medicine-form">
    <div>
      <span>Name of Medicine:</span><input onChange={e => { setNewMedicine(e.target.value)}} value={newMedicine} type="text" />
    </div>
    <div>
      <button onClick={() => { addNewMedicine() }}>Add Medicine</button>
    </div>
  </div>
);

export default AddMedicineForm;