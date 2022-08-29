import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import { userActionsType } from '../../store/actions/user';
import { getUserDataSelector } from '../../store/selectors/user';
import AuthModal from '../AuthModal/AuthModal';
import Basket from '../Basket/Basket';
import classes from './Header.module.css';

const links = [
  {
    route: ROUTES.Home,
    title: 'Home',
  },
  {
    route: ROUTES.About,
    title: 'About',
  },
];

const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const dispatch = useDispatch();
  const userData = useSelector(getUserDataSelector);

  function handleClickOpenModal() {
    setIsShowModal(true);
  }

  function handleClickLogOut() {
    dispatch({ type: userActionsType.LOGOUT });
  }

  const list = links.map((link) => (
    <NavLink activeclassname='active' key={link.route} className={classes.link} to={link.route}>
      <li key={link.route}>{link.title}</li>
    </NavLink>
  ));

  return (
    <header>
      <div className={`${classes.wrap} container`}>
        <div>
          <h1>i'LLBuy</h1>
          <nav>
            <ul className={classes.list}>{list}</ul>
          </nav>
        </div>
        <div>
          {userData.isAuth && <Basket />}
          {userData.isAuth ? (
            <div className={classes.user}>
              <span>{userData.name}</span>
              <span>{userData.surname}</span>
              <button onClick={handleClickLogOut}>Выйти</button>
            </div>
          ) : (
            <button onClick={handleClickOpenModal}>Войти</button>
          )}
          {isShowModal && <AuthModal setIsShowModal={setIsShowModal} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
