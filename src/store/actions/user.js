import { createAction } from '@reduxjs/toolkit';

export const userActionsType = {
  LOGIN: 'user/LOGIN',
  LOGOUT: 'LOGOUT',
};

export const LOGIN = createAction(userActionsType.LOGIN, (payload) => ({
  payload,
}));

export const LOGOUT = createAction(userActionsType.LOGOUT);
