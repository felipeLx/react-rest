import * as actions from "../actions/actionTypes";
import { updateObject } from '../../shared/utility';

const initialState = {
  data: [],
  remoteData: []
};

function rootReducer(state = initialState, action) {
  if (action.type === actions.ADD_DATA) {
    return updateObject({}, state, {
      data: state.data.concat(action.payload)
    });
  }
  if (action.type === actions.DATA_LOADED) {
    return updateObject({}, state, {
      remoteData: state.remoteData.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;