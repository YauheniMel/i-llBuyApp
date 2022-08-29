import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import classes from './NotFound.module.css';

const NotFound = () => (
  <div className={classes.wrap}>
    <div>
      <span>Что-то пошло не так. Данной страницы не существует</span>
    </div>
    <Link className={classes.link} to={ROUTES.Root}>
      Вернуться на главную страницу
    </Link>
  </div>
);

export default NotFound;
