import React from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import classes from './Root.module.css';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const Root = () => (
  <div className={classes.wrap}>
    <Header />
    <ErrorBoundary>
      <Outlet />
    </ErrorBoundary>
  </div>
);

export default Root;
