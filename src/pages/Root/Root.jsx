import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import classes from './Root.module.css';

const Root = ({ state, dispatch }) => {
  return (
    <>
      <Header
        isAuth={state.isAuth}
        name={state.name}
        surname={state.surname}
        basket={state.basket}
        dispatch={dispatch}
      />
        <Outlet />
    </>
  )
}

export default Root;
