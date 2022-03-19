import * as types from '../constants/actionTypes';

const initialState = {
  userId: 123,
  firstName: 'Trey',
  lastName: 'Lewis',
  email: 'treylewis@gmail.com',
  userMedicines: [{medicineId: 1, medicineName: 'Sentret', medicineSchedule: {breakfast: true, lunch: false, dinner: false, beforeBed: true}}]
};

const medsReducer = (state = initialState, action) => {
  let marketList;
  let totalCards;
  console.log(state)
  switch (action.type) {
    case types.ADD_MARKET:
    //   // increment lastMarketId and totalMarkets counters
    //   const marketId = ++state.lastMarketId;
    //   const totalMarkets = ++state.totalMarkets;
    //   // create the new market object from provided data
    //   const newMarket = {
    //     // what goes in here?
    //     marketId,
    //     location: state.newLocation,
    //     cards: 0,
    //   };

    //   // push the new market onto a copy of the market list
    //   marketList = state.marketList.slice();
    //   marketList.push(newMarket);

    //   // return updated state
      return {
        ...state,
        // marketList,
        // totalMarkets,
        // lastMarketId: marketId,
        // newLocation: '',
      };

    default: {
      return state;
    }
  }
};

export default medsReducer;