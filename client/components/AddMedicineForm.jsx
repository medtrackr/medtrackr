import React from 'react';
import { ProgressPlugin } from 'webpack';

const AddMedicineForm = ({
  setNewMedicine,
}) => (
  <div className="add-medicine-form">
    <div>
      <input onChange={e => { setNewMedicine(e.target.value)}} value={newMedicine} type="text" />
    </div>
  </div>
);

export default AddMedicineForm;