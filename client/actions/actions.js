import * as types from '../constants/actionTypes';

export const addCardActionCreator = marketId => ({
  type: types.ADD_CARD,
  payload: marketId,
});
// export const addMarketActionCreator = marketId => ({
//   type: types.ADD_MARKET,
//   payload: marketId,
// });
// export const deleteMarketActionCreator = marketId => ({
//   type: types.DELETE_MARKET,
//   payload: marketId,
// });