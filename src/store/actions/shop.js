import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import fetchData from '../../services/fetchData';

export const shopActionsType = {
  SET_TARGET_ITEM: 'shop/SET_TARGET_ITEM',
  SET_ITEMS: 'shop/SET_ITEMS',
  CLEAR_TARGET_ITEM: 'shop/CLEAR_TARGET_ITEM',
  FETCH_ITEM_BY_ID_THUNK: 'FETCH_ITEM_BY_ID_THUNK',
  FETCH_ITEMS_THUNK: 'shop/FETCH_ITEMS_THUNK',
};

export const SET_TARGET_ITEM = createAction(shopActionsType.SET_TARGET_ITEM, (payload) => ({
  payload,
}));

export const SET_ITEMS = createAction(shopActionsType.SET_ITEMS, (payload) => ({
  payload,
}));

export const CLEAR_TARGET_ITEM = createAction(shopActionsType.CLEAR_TARGET_ITEM);

// async actions
export const fetchItemByIdThunk = createAsyncThunk(
  shopActionsType.FETCH_ITEM_BY_ID_THUNK,
  async (id, { rejectWithValue }) => {
    try {
      const item = await fetchData(id, null);

      return item;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

export const fetchItemsThunk = createAsyncThunk(
  shopActionsType.FETCH_ITEMS_THUNK,
  async (page, { rejectWithValue }) => {
    try {
      const items = await fetchData(null, page);

      return items;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);
