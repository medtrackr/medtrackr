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

// userMedicines: [
//   {medicineId: 1, medicineName: 'Sentret', medicineSchedule: {breakfast: true, lunch: false, dinner: false, beforeBed: true}},
//   {medicineId: 2, medicineName: 'Deoxys', medicineSchedule: {breakfast: true, lunch: true, dinner: true, beforeBed: false}}],
// addMedicineStatus: false,
// newMedicine: '',
// breakfast: false,
// lunch: false,
// dinner: false,
// beforeBed: false,

// Add new medicine to state when button is pressed
export const addNewMedicineActionCreator = (email, medicineName, breakfast, lunch, dinner, beforeBed) => (dispatch) => {
  const body = {
    name: medicineName,
    userMedicines: {
      medicineSchedule: {breakfast, lunch, dinner, beforeBed}
    },
    email: email
  }
  console.log("actions.js body: ",body)
  axios.post('db/addMedicine', body)
    .then(({data}) => {
      console.log("actions.js: ",data)
      dispatch({
        type: types.ADD_NEW_MEDICINE,
        payload: data
      })
    })
    .catch(err => console.log(err))
};

export const removeMedicineActionCreator = id => ({
  type: types.REMOVE_MEDICINE,
  payload: id,
});

export const updateScheduleCheckboxActionCreator = checkbox => ({
  type: types.UPDATE_SCHEDULE_CHECKBOX ,
  payload: checkbox,
});

export const loginActionCreator = (email, password) => (dispatch) => {
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
