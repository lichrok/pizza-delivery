import {FETCH_DATA} from '../actions/api';

const initState = {
  items: [],
  isFetching: false
}

const goodsReducer = (state = initState, action) => {
  if (action.type === FETCH_DATA) {
    return {
      ...state,
      items: action.payload.items
    }
  }
  return state;
}

export default goodsReducer
