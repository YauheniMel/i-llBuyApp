import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';

const NotFound = () => (
  <>
    <span>
      Что-то пошло не так. Данной страницы не существует
    </span>
    <Link to={ROUTES.Root}>Вернуться на главную страницу</Link>
  </>
)

export default NotFound;
