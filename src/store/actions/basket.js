import { createAction } from '@reduxjs/toolkit';

export const basketActionsType = {
  ADD_ITEM_IN_BASKET: 'basket/ADD_ITEM_IN_BASKET',
  SET_NUM_ITEM_IN_BASKET: 'basket/SET_NUM_ITEM_IN_BASKET',
  DELETE_LINE_IN_BASKET: 'DELETE_LINE_IN_BASKET',
  CLEAR_BASKET: 'CLEAR_BASKET',
};

export const CLEAR_BASKET = createAction(basketActionsType.CLEAR_BASKET);

export const DELETE_LINE_IN_BASKET = createAction(
  basketActionsType.DELETE_LINE_IN_BASKET,
  (payload) => ({
    payload,
  })
);

export const ADD_ITEM_IN_BASKET = createAction(basketActionsType.ADD_ITEM_IN_BASKET, (payload) => ({
  payload,
}));

export const SET_NUM_ITEM_IN_BASKET = createAction(
  basketActionsType.SET_NUM_ITEM_IN_BASKET,
  (payload) => ({
    payload,
  })
);
