import { initialState } from './App';

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      const { id, name, surname } = action.payload;

      return {
        ...state,
        isAuth: true,
        id,
        name,
        surname,
      };
    case 'LOGOUT':
      return {
        ...state,
        ...initialState,
        items: [...state.items],
        targetItem: { ...state.targetItem },
      };
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload,
      };
    case 'SET_ITEM':
      return {
        ...state,
        targetItem: action.payload,
      };
    case 'CLEAR_TARGET_ITEM':
      return {
        ...state,
        targetItem: {},
      };
    case 'SET_ITEM_IN_BASKET':
      if (!action.payload.howMany) return { ...state };

      const isItemAlreadyInBasket = state.basket.some((item) => item.id === action.payload.id);

      let basket = [];

      if (isItemAlreadyInBasket) {
        basket = state.basket.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              howMany: item.howMany + action.payload.howMany,
            };
          }

          return item;
        });
      } else {
        const [targetItem] = state.items.filter((item) => item.id === action.payload.id);

        basket = [...state.basket, { ...targetItem, howMany: action.payload.howMany }];
      }

      return {
        ...state,
        basket,
      };
    case 'SET_IS_FETCHING':
      return {
        ...state,
        isFetching: true,
      };
    case 'SET_IS_NOT_FETCHING':
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default reducer;
