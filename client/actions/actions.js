import * as types from '../constants/actionTypes';
import axios from 'axios'

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


export const loginActionCreator = (email, password) => (dispatch) => {
  // console.log(email, password)
  // const response = await fetch(`/db/login/${email}/${password}`)
  // const data = await response.json()
  // console.log(data)

  // return {
  //   type: types.LOGIN,
  //   payload: data
  // }

  
  axios.get(`/db/login/${email}/${password}`)
  .then(({data}) => {
    // console.log(data)
    dispatch({
      type: types.LOGIN,
      payload: data
    })
  })
  .catch(err => console.log(err))

};

export const registerActionCreator = (firstName, lastName, email, password) => {
  console.log(firstName, lastName, email, password)
  return {type: types.REGISTER}
};
