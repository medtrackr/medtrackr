import * as types from '../constants/actionTypes';

const initialState = {
  userId: 123,
  firstName: 'Trey',
  lastName: 'Lewis',
  email: 'treylewis@gmail.com',
  lastMedicineId: 2,
  userMedicines: [
    {medicineId: 1, medicineName: 'Sentret', medicineSchedule: {breakfast: true, lunch: false, dinner: false, beforeBed: true}},
    {medicineId: 2, medicineName: 'Deoxys', medicineSchedule: {breakfast: true, lunch: true, dinner: true, beforeBed: false}}],
  addMedicineStatus: false,
  newMedicine: '',
};

const medsReducer = (state = initialState, action) => {
  let medicineList
  console.log(state)
  switch (action.type) {
    case types.ADD_MEDICINE:

      return {
        ...state,
        addMedicineStatus: true,
      };
      
    case types.SHOW_SCHEDULE:

      return {
        ...state,
        addMedicineStatus: false,
      };

    case types.SET_NEW_MEDICINE:
      return {
        ...state,
        newMedicine: action.payload,
      };

    case types.ADD_NEW_MEDICINE:
      const medicineId = ++state.lastMedicineId;
      const newMedicine = {
        medicineId,
        medicineName: state.newMedicine,
        medicineSchedule: {breakfast: false, lunch: true, dinner: true, beforeBed: false}, // PLACEHOLDER SCHEDULE UNTIL WE GET CHECKBOXES WORKING
      }

      medicineList = state.userMedicines.slice();
      medicineList.push(newMedicine);

      return {
        ...state,
        lastMedicineId: medicineId,
        userMedicines: medicineList,
        newMedicine: '',
      };
    

    default: {
      return state;
    }
  }
};

export default medsReducer;