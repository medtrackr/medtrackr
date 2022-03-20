import * as types from '../constants/actionTypes';

const initialState = {
  userId: 123,
  firstName: 'Trey',
  lastName: 'Lewis',
  email: 'treylewis@gmail.com',
  userMedicines: [
    {medicineId: 1, medicineName: 'Sentret', medicineSchedule: {breakfast: true, lunch: false, dinner: false, beforeBed: true}},
    {medicineId: 2, medicineName: 'Deoxys', medicineSchedule: {breakfast: true, lunch: true, dinner: true, beforeBed: false}}],
  addMedicineStatus: false,
  newMedicine: null,
};

const medsReducer = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case types.ADD_MEDICINE:
      
      return {
        ...state,
        addMedicineStatus: true,
      };

    // case types.SET_NEW_MEDICINE:
    //   return {
    //     ...state,
    //     newMedicine: action.payload,
    //   };

    default: {
      return state;
    }
  }
};

export default medsReducer;