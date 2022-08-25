import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import classes from './Slider.module.css';

const Slider = ({ items, dispatch, ...rest }) => {
  const [targetCard, setTargetCard] = useState(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setTargetCard(items[position]);
  }, [items]);

  function handleClickSetNextItem() {
    const nextPosition = position + 1;

    setTargetCard(items[nextPosition]);

    setPosition(nextPosition);
  }

  function handleClickSetPreviousItem() {
    if (position === 0) return null;

    const previousPosition = position - 1;

    setTargetCard(items[previousPosition]);

    setPosition(previousPosition);
  }

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
    targetCard && (
      <div className={classes.wrap}>
        <div className={classes.action}>
          <button onClick={handleClickSetNextItem}>&and;</button>
          <button onClick={handleClickSetPreviousItem}>&or;</button>
        </div>
        {rest.isAuth && (
          <button onClick={() => handleAddItemInBasket(targetCard.id)} className={classes.btn_add}>
            +
          </button>
        )}

        <div className={classes.target}>
          <div className={classes.price}>
            <strong>{targetCard.price}</strong>
            <span>&#8364;</span>
          </div>
          <h2 className={classes.target_title}>{targetCard.title}</h2>
        </div>
        <div
          className={classes.back}
          style={{
            backgroundImage: `url(${targetCard.image})`,
          }}
        ></div>
        <Carousel
          items={items}
          dispatch={dispatch}
          setPosition={setPosition}
          setTargetCard={setTargetCard}
          {...rest}
        />
      </div>
    )
  );
};

export default Slider;
