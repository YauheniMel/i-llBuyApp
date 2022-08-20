import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import classes from './Root.module.css';

const Root = ({ state }) => {
  return (
    <>
      <Header basketItems={state.basketItems} />
      <Outlet />
    </>
  )
}

export default Root;
