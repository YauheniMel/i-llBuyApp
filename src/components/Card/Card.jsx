import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import fetchItem from '../../services/fetchItem';
import classes from './Card.module.css';

const Card = ({
  title,
  imageURL,
  price,
  id,
}) => {

  return (
    <div className={classes.wrap}>
      <img src={imageURL} alt="card" />
      <Link to={`${ROUTES.DetailsLink}${id}`}>
        <h3>{title}</h3>
      </Link>
      <div className={classes.price}>
        <strong>{price}</strong>
        <span>&#8364;</span>
      </div>
      <button>Добавить в корзину</button>
    </div>
  )
}

export default Card;
