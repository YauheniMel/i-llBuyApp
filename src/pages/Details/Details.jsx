import { useEffect, useState } from 'react';
import fetchItem from '../../services/fetchItem';
import { useParams } from "react-router-dom";
import classes from './Details.module.css';

const Details = ({ isAuth, item, dispatch, setError }) => {
  const [howMany, setHowMany] = useState(0);
  const params = useParams();

  useEffect(() => {
    fetchItem(params.id)
      .then((item) => {
        dispatch({
          type: 'SET_ITEM',
          payload: item
        })
      })
      .catch((error) => setError(error.message))
      .finally(() => console.log('Fetched'));

    return () => {
      dispatch({
        type: 'CLEAR_TARGET_ITEM'
      })
    }
  }, []);

  function handleChangeHowManyItems({target}) {
    setHowMany(+target.value);
  }

  function handleSubmitAddItemsInBasket(e, id) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const payload = {
      id,
      howMany: +formData.get('howMany')
    }

    dispatch({
      type: 'ADD_ITEM_IN_BASKET',
      payload
    })

    setHowMany(0);
  }

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
        {
          isAuth ? (
            <form action="" onSubmit={(e) => handleSubmitAddItemsInBasket(e, item.id)}>
              <input
                type="number"
                name="howMany"
                min={0}
                value={howMany}
                onChange={handleChangeHowManyItems}
              />
              <button className={classes.button}>
                Добавить в корзину
              </button>
            </form>
          ) : (
            <span>
              Чтобы добавить товар в корзину залогинтесь
            </span>
          )
        }
      </div>
    </section>
  )
}

export default Details;
