import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';

const NotFound = () => (
  <>
    <span>
      Что-то пошло не так. Данной страницы не существует
    </span>
    <NavLink to={ROUTES.Root}>Вернуться на главную страницу</NavLink>
  </>
)

export default NotFound;
