import React from 'react';

import Medicine from '../components/Medicine.jsx';

// changes value when schedule checkbox is checked
const handleOnChange = (name, time, func) => {
  time = !time;
  func({[name]: time});
}

const generateMedicineList = (medicineList, removeMedicine) => {
  const output = [];
  if (!medicineList) return output;
  for (let i = 0; i < medicineList.length; i++){
    output.push (<Medicine medicineName={medicineList[i].medicineName} medicineId={medicineList[i].medicineId} removeMedicine={removeMedicine}/>)
  }
  return output;
}

const RemoveMedicineForm = ({
  userMedicines,
  removeMedicine,
  setNewMedicine, // Add the name of the new medicine to the state when the form is filled
  newMedicine, // Name of new medicine
  addNewMedicine, // Add the new medicine to the state
  breakfast, //state of checkbox
  lunch, //state of checkbox
  dinner, //state of checkbox
  beforeBed, //state of checkbox
  updateScheduleCheckbox, // function to update state of checkbox 
}) => {

  const listOfMedicines = generateMedicineList(userMedicines, removeMedicine);

  return (
  <div className="add-medicine-form">
    <div className="add-medicine-form-data">
      <div>
        {listOfMedicines}
      </div>
    </div>
  </div>
)};

export default RemoveMedicineForm;