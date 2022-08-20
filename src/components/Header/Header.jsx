import Basket from '../Basket/Basket';
import classes from './Header.module.css';

const links = [
  {
    route: 'home',
    title: 'Home'
  },
  {
    route: 'about',
    title: 'About'
  },
]

const Header = ({ basketItems }) => {

  const list = links.map(link => (
    <a key={link.route} className={classes.link} href={link.route}>
      <li key={link.route}>
        {link.title}
      </li>
    </a>
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
