import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classes from './Details.module.css';
import { ADD_ITEM_IN_BASKET } from '../../store/actions/basket';
import { fetchItemByIdThunk, shopActionsType } from '../../store/actions/shop';
import { getShopHttpErrorSelector, getShopTargetItemSelector } from '../../store/selectors/shop';
import { useDispatch, useSelector } from 'react-redux';
import { getUserIsAuthSelector } from '../../store/selectors/user';

const Details = () => {
  const [howMany, setHowMany] = useState(0);

  const dispatch = useDispatch();

  const item = useSelector(getShopTargetItemSelector);
  const isAuth = useSelector(getUserIsAuthSelector);
  const errorMsg = useSelector(getShopHttpErrorSelector);

  const params = useParams();

  useEffect(() => {
    if (errorMsg) {
      throw new Error(errorMsg);
    }
  }, [errorMsg]);

  useEffect(() => {
    dispatch(fetchItemByIdThunk(params.id));

    return () => {
      dispatch({
        type: shopActionsType.CLEAR_TARGET_ITEM,
      });
    };
  }, []);

  function handleChangeHowManyItems({ target }) {
    setHowMany(+target.value);
  }

  function handleSubmitAddItemsInBasket(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const payload = {
      ...item,
      howMany: +formData.get('howMany'),
    };

    dispatch({
      type: ADD_ITEM_IN_BASKET,
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
