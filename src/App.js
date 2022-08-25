import { useReducer, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import ROUTES from './constants/routes';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import NotFound from './pages/NotFound/NotFound';
import Root from './pages/Root/Root';
import PreLoader from './components/PreLoader/PreLoader';
import reducer from './reducer';

export const initialState = {
  id: null,
  isAuth: false,
  name: null,
  surname: null,
  items: [],
  targetItem: {},
  basket: [],
  isFetching: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // control app's state
  window.getState = () => state;
  //

  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.Root} element={<Root state={state} dispatch={dispatch} />}>
          <Route
            path={ROUTES.Home}
            element={<Home dispatch={dispatch} isAuth={state.isAuth} items={state.items} />}
          />
          <Route path={ROUTES.About} element={<About />} />
          <Route
            path={ROUTES.Details}
            element={<Details isAuth={state.isAuth} item={state.targetItem} dispatch={dispatch} />}
          />
          <Route index element={<Navigate to={ROUTES.Home} />} />
        </Route>
        <Route path={ROUTES.NotFound} element={<NotFound />} />
      </Routes>
      {state.isFetching && <PreLoader />}
    </div>
  );
}

export default App;
