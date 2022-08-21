import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import AuthModal from '../AuthModal/AuthModal';
import Basket from '../Basket/Basket';
import classes from './Header.module.css';

const links = [
  {
    route: ROUTES.Home,
    title: 'Home'
  },
  {
    route: ROUTES.About,
    title: 'About'
  },
]

const Header = ({ isAuth, name, surname, basket, dispatch }) => {
  const [ isShowModal, setIsShowModal ] = useState(false);

  function handleClickOpenModal() {
    setIsShowModal(true);
  }

  function handleClickLogOut() {
    dispatch({ type: 'LOGOUT' })
  }

  const list = links.map(link => (
    <NavLink key={link.route} className={classes.link} to={link.route}>
      <li key={link.route}>
        {link.title}
      </li>
    </NavLink>
  ))

  return (
    <div className={classes.wrap}>
      <h1>i'LLBuy</h1>
      <nav>
        <ul className={classes.list}>
          {list}
        </ul>
      </nav>
      {
        isAuth && (
          <Basket items={basket} />
        )
      }
      {
        isAuth ? (
        <>
          <span>{name}</span>
          <span>{surname}</span>
          <button onClick={handleClickLogOut}>Выйти</button>
        </>
        ): (
          <button onClick={handleClickOpenModal}>Войти</button>
        )
      }
      {isShowModal && <AuthModal dispatch={dispatch} setIsShowModal={setIsShowModal}/>}
    </div>
  )
}

export default Header;
