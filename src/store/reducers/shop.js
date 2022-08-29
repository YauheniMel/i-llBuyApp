import { createReducer } from '@reduxjs/toolkit';
import {
  SET_TARGET_ITEM,
  SET_ITEMS,
  CLEAR_TARGET_ITEM,
  fetchItemByIdThunk,
  fetchItemsThunk,
} from '../actions/shop';

const initialState = {
  items: [],
  targetItem: {},
  isFetching: false,
  error: null,
};

const shopReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(SET_TARGET_ITEM, (state, { payload }) => ({
      ...state,
      targetItem: payload,
    }))
    .addCase(SET_ITEMS, (state, { payload }) => ({
      ...state,
      items: payload,
    }))
    .addCase(CLEAR_TARGET_ITEM, (state) => ({
      ...state,
      targetItem: {},
    }))
    .addCase(fetchItemByIdThunk.pending, (state) => ({
      ...state,
      isFetching: true,
    }))
    .addCase(fetchItemByIdThunk.fulfilled, (state, { payload }) => ({
      ...state,
      targetItem: payload,
      isFetching: false,
    }))
    .addCase(fetchItemByIdThunk.rejected, (state, { payload }) => ({
      ...state,
      error: payload,
      isFetching: false,
    }))
    .addCase(fetchItemsThunk.pending, (state) => ({
      ...state,
      isFetching: true,
    }))
    .addCase(fetchItemsThunk.fulfilled, (state, { payload }) => {
      return {
        ...state,
        items: [...payload],
        isFetching: false,
      };
    })
    .addCase(fetchItemsThunk.rejected, (state, { payload }) => ({
      ...state,
      error: payload,
      isFetching: false,
    }));
});

export default shopReducer;
