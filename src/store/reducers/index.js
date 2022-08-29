import { combineReducers } from 'redux';
import basketReducer from './basket';
import shopReducer from './shop';
import userReducer from './user';

const reducers = combineReducers({
  basket: basketReducer,
  user: userReducer,
  shop: shopReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  }

  return reducers(state, action);
};

export default rootReducer;
