import { useEffect } from 'react';
import fetchItem from '../../services/fetchItem';
import { useParams } from "react-router-dom";
import classes from './Details.module.css';

const Details = ({ item, dispatch }) => {
  const params = useParams();

  useEffect(() => {
    fetchItem(params.id)
      .then((item) => {
        dispatch({
          type: 'SET_ITEM',
          payload: item
        })
      })
      .catch((error) => alert(error))
      .finally(() => console.log('Fetched'));

    return () => {
      dispatch({
        type: 'CLEAR_TARGET_ITEM'
      })
    }
  }, []);

  return (
    <section>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div className={classes.price}>
        <strong>{item.price}</strong>
        <span>&#8364;</span>
      </div>
      <img src={item.category?.image} alt={item.title} />
      <hr />
      {
        item.images && item.images[0] && item.images?.map((image, idx) => (
          <img key={idx} src={image} alt={item.title} />
        ))
      }
      <div className={classes.btnWrap}>
        <form action="">
          <input type="number" name="" id="" />
          <button className={classes.button}>
            Добавить в корзину
          </button>
        </form>
      </div>
    </section>
  )
}

export default Details;
