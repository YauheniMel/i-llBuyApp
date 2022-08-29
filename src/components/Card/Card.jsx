import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import classes from './Card.module.css';
import { useDispatch } from 'react-redux';
import { basketActionsType } from '../../store/actions/basket';

const Card = ({ isAuth, item, setTargetCard }) => {
  const dispatch = useDispatch();

  function handleAddItemInBasket(id) {
    const payload = {
      ...item,
      howMany: 1,
    };

    dispatch({
      type: basketActionsType.ADD_ITEM_IN_BASKET,
      payload,
    });
  }

  return (
    <div className={classes.wrap} onClick={() => setTargetCard(item.id)}>
      <img src={item.image} alt='card' />
      <Link className={classes.link} to={`${ROUTES.DetailsLink}${item.id}`}>
        <h3>{item.title}</h3>
      </Link>
      <div className={classes.price}>
        <strong>{item.price}</strong>
        <span>&#8364;</span>
      </div>
      {isAuth ? (
        <button
          onClick={(e) => {
            e.stopPropagation();

            handleAddItemInBasket(item.id);
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
