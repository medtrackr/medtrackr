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
  breakfast: false,
  lunch: false,
  dinner: false,
  beforeBed: false,
  loginSuccess: false,
};



const medsReducer = (state = initialState, action) => {
  // console.log(state);
  let medicineList;
  switch (action.type) {
    case types.LOGIN:
      console.log(action.payload)
      return {
        ...state,
        userId: action.payload.userId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        userMedicines: action.payload.userMedicines,
        loginSuccess: true,
      };
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

    case types.UPDATE_SCHEDULE_CHECKBOX:
      const time = Object.keys(action.payload)[0];
      return {
        ...state,
        [time]: action.payload[time],
      };

    case types.ADD_NEW_MEDICINE:
      const medicineId = ++state.lastMedicineId;
      const newMedicine = {
        medicineId,
        medicineName: state.newMedicine,
        medicineSchedule: {breakfast: state.breakfast, lunch: state.lunch, dinner: state.dinner, beforeBed: state.beforeBed},
      }

      medicineList = state.userMedicines.slice();
      medicineList.push(newMedicine);

      return {
        ...state,
        lastMedicineId: medicineId,
        userMedicines: medicineList,
        newMedicine: '',
      };

    case types.REMOVE_MEDICINE:
      console.log(action.payload)
      const id = action.payload;
      const newMedicineList = [];
      for (let i = 0; i < state.userMedicines.length; i++) {
        if (state.userMedicines[i].medicineId !== id) newMedicineList.push(state.userMedicines[i]);
      }
      return {
        ...state,
        userMedicines: newMedicineList,
      };

    default: {
      return state;
    }
  }
};

export default medsReducer;