import { useReducer, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ROUTES from './constants/routes';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import NotFound from './pages/NotFound/NotFound';
import Root from './pages/Root/Root';
import NotificationModal from './components/NotificationModal/NotificationModal';

const initialState = {
  id: null,
  isAuth: false,
  name: null,
  surname: null,
  items: [],
  targetItem: {},
  basket: [],
};

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
    case 'ADD_ITEM_IN_BASKET':
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
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [error, setError] = useState(null);
  // control app's state
  window.getState = () => state;
  //

  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.Root} element={<Root state={state} dispatch={dispatch} />}>
          <Route
            path={ROUTES.Home}
            element={
              <Home
                setError={setError}
                dispatch={dispatch}
                isAuth={state.isAuth}
                items={state.items}
              />
            }
          />
          <Route path={ROUTES.About} element={<About />} />
          <Route
            path={ROUTES.Details}
            element={
              <Details
                setError={setError}
                isAuth={state.isAuth}
                item={state.targetItem}
                dispatch={dispatch}
              />
            }
          />
          <Route index element={<Navigate to={ROUTES.Home} />} />
        </Route>
        <Route path={ROUTES.NotFound} element={<NotFound />} />
      </Routes>
      <NotificationModal error={error} setError={setError} />
    </div>
  );
}

export default App;
