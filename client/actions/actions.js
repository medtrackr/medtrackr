import * as types from '../constants/actionTypes';

// Render the AddMedicineContainer when the "Add Medications" button is pressed
export const addMedicineActionCreator = () => ({
  type: types.ADD_MEDICINE,
});

export const showScheduleActionCreator = () => ({
  type: types.SHOW_SCHEDULE,
});

// Add the name of the new medicine to the state when the form is filled
export const setNewMedicineActionCreator = newMedicine => ({
  type: types.SET_NEW_MEDICINE,
  payload: newMedicine,
});

// Add new medicine to state when button is pressed
export const addNewMedicineActionCreator = () => ({
  type: types.ADD_NEW_MEDICINE,
});

export const removeMedicineActionCreator = id => ({
  type: types.REMOVE_MEDICINE,
  payload: id,
});

export const updateScheduleCheckboxActionCreator = checkbox => ({
  type: types.UPDATE_SCHEDULE_CHECKBOX ,
  payload: checkbox,
});


export const loginActionCreator = (email, password) => {
  console.log(email, password)
  return {type: types.LOGIN}
};

export const registerActionCreator = (firstName, lastName, email, password) => {
  console.log(firstName, lastName, email, password)
  return {type: types.REGISTER}
};
