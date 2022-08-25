import { useEffect, useState } from 'react';
import fetchItem from '../../services/fetchItem';
import { useParams } from 'react-router-dom';
import classes from './Details.module.css';

const Details = ({ isAuth, item, dispatch }) => {
  const [howMany, setHowMany] = useState(0);
  const [error, setError] = useState(null);

  if (error) {
    throw new Error(error);
  }

  const params = useParams();

  useEffect(() => {
    dispatch({
      type: 'SET_IS_FETCHING',
    });

    (async () => {
      try {
        const item = await fetchItem(params.id);

        dispatch({
          type: 'SET_ITEM',
          payload: item,
        });
      } catch (err) {
        setError(err);
      } finally {
        dispatch({
          type: 'SET_IS_NOT_FETCHING',
        });
      }
    })();

    return () => {
      dispatch({
        type: 'CLEAR_TARGET_ITEM',
      });
    };
  }, []);

  function handleChangeHowManyItems({ target }) {
    setHowMany(+target.value);
  }

  function handleSubmitAddItemsInBasket(e, id) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const payload = {
      id,
      howMany: +formData.get('howMany'),
    };

    dispatch({
      type: 'SET_ITEM_IN_BASKET',
      payload,
    });

    setHowMany(0);
  }

  return (
    <div className='container'>
      <section className={classes.section}>
        <div className={classes.description}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <div className={classes.price}>
            <strong>{item.price}</strong>
            <span>&#8364;</span>
          </div>
        </div>
        <img className={classes.image} src={item?.image} alt={item.title} />
        <div className={classes.btnWrap}>
          {isAuth ? (
            <form action='' onSubmit={(e) => handleSubmitAddItemsInBasket(e, item.id)}>
              <input
                className={classes.input}
                type='number'
                name='howMany'
                min={0}
                value={howMany}
                onChange={handleChangeHowManyItems}
              />
              <button className={classes.button}>Добавить в корзину</button>
            </form>
          ) : (
            <span>Чтобы добавить товар в корзину залогинтесь</span>
          )}
        </div>
      </section>
    </div>
  );
};

export default Details;
