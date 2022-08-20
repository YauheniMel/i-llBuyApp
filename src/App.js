import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './constants/routes';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import NotFound from './pages/NotFound/NotFound';
import Root from './pages/Root/Root';

const initialState = {
  id: null,
  name: null,
  surname: null,
  items: [],
  targetItem: {},
  basketItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // control app's state
  window.getState = () => state;
  //

  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.Root} element={<Root state={state} />}>
          <Route path={ROUTES.Home} element={<Home dispatch={dispatch} items={state.items} />} />
          <Route path={ROUTES.About} element={<About />} />
          <Route
            path={ROUTES.Details}
            element={<Details item={state.targetItem} dispatch={dispatch} />}
          />
        </Route>
        <Route path={ROUTES.NotFound} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
