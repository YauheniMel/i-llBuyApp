import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';
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

const Header = ({ basketItems }) => {

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
      <Basket items={basketItems} />
      <button>Авторизация</button>
    </div>
  )
}

export default Header;
