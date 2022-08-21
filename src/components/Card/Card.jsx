import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import classes from './Card.module.css';

const Card = ({
  isAuth,
  title,
  imageURL,
  price,
  id,
  dispatch
}) => {

  function handleAddItemInBasket(id) {
    const payload = {
      id,
      howMany: 1
    }

    dispatch({
      type: 'ADD_ITEM_IN_BASKET',
      payload
    })
  }

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
      {
        isAuth ? (
          <button onClick={() => handleAddItemInBasket(id)}>Добавить в корзину</button>
        ) : (
          <span>Чтобы добавить товар в корзину залогинтесь</span>
        )
      }
    </div>
  )
}

export default Card;
