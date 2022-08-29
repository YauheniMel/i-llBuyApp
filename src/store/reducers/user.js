import { createReducer } from '@reduxjs/toolkit';
import { LOGIN, LOGOUT } from '../actions/user';

const initialState = {
  id: null,
  isAuth: false,
  name: null,
  surname: null,
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LOGIN, (state, { payload }) => {
      const { id, name, surname } = payload;

      return {
        ...state,
        id,
        name,
        surname,
        isAuth: true,
      };
    })
    .addCase(LOGOUT, (state) => ({
      ...state,
      ...initialState,
    }));
});

export default userReducer;
