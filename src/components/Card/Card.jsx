import fetchItem from '../../services/fetchItem';
import classes from './Card.module.css';

const getItemURL = (id) => `https://api.escuelajs.co/api/v1/products/${id}`;

const Card = ({
  title,
  imageURL,
  price,
  id,
  dispatch
}) => {
  function handleClickGetItem(id) {
    const itemURL = getItemURL(id);

    fetchItem(itemURL)
      .then((item) => dispatch({
        type: 'SET_ITEM',
        payload: item
      }))
      .catch((error) => alert(error))
      .finally(() => console.log('Fetched'));
  }

  return (
    <div className={classes.wrap}>
      <img src={imageURL} alt="card" />
      <a onClick={() => handleClickGetItem(id)} href="#">
        <h3>{title}</h3>
      </a>
      <div className={classes.price}>
        <strong>{price}</strong>
        <span>&#8364;</span>
      </div>
      <button>Добавить в корзину</button>
    </div>
  )
}

export default Card;
