import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import classes from './Root.module.css';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const Root = ({ state, dispatch }) => (
  <div className={classes.wrap}>
    <Header
      isAuth={state.isAuth}
      name={state.name}
      surname={state.surname}
      basket={state.basket}
      dispatch={dispatch}
    />
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  </div>
);

export default Root;
