import { createReducer } from '@reduxjs/toolkit';
import {
  ADD_ITEM_IN_BASKET,
  CLEAR_BASKET,
  DELETE_LINE_IN_BASKET,
  SET_NUM_ITEM_IN_BASKET,
} from '../actions/basket';

const initialState = [];

const basketReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ADD_ITEM_IN_BASKET, (state, { payload }) => {
      const isItemAlreadyInBasket = state.some((item) => item.id === payload.id);

      if (isItemAlreadyInBasket) {
        return state.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              howMany: +item.howMany + +payload.howMany,
            };
          }

          return item;
        });
      }

      return [...state, { ...payload }];
    })
    .addCase(SET_NUM_ITEM_IN_BASKET, (state, { payload }) => {
      return state.map((item) => {
        if (item.id === payload.id) {
          return {
            ...item,
            howMany: payload.howMany,
          };
        }
        return item;
      });
    })
    .addCase(DELETE_LINE_IN_BASKET, (state, { payload }) => {
      return state.filter((item) => item.id !== payload.id);
    })
    .addCase(CLEAR_BASKET, (state) => {
      return [...initialState];
    });
});

export default basketReducer;
