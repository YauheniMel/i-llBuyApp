import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import classes from './Card.module.css';

const Card = ({ isAuth, title, imageURL, price, id, dispatch, setTargetCard }) => {
  function handleAddItemInBasket(id) {
    const payload = {
      id,
      howMany: 1,
    };

    dispatch({
      type: 'SET_ITEM_IN_BASKET',
      payload,
    });
  }

  return (
    <div className={classes.wrap} onClick={() => setTargetCard(id)}>
      <img src={imageURL} alt='card' />
      <Link className={classes.link} to={`${ROUTES.DetailsLink}${id}`}>
        <h3>{title}</h3>
      </Link>
      <div className={classes.price}>
        <strong>{price}</strong>
        <span>&#8364;</span>
      </div>
      {isAuth ? (
        <button
          onClick={(e) => {
            e.stopPropagation();

            handleAddItemInBasket(id);
          }}
        >
          Добавить в корзину
        </button>
      ) : (
        <span>Чтобы добавить товар в корзину залогинтесь</span>
      )}
    </div>
  );
};

export default Card;
