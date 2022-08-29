import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import { useDispatch, useSelector } from 'react-redux';
import { getShopItemsSelector } from '../../store/selectors/shop';
import { basketActionsType } from '../../store/actions/basket';
import classes from './Slider.module.css';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/routes';
import Button from '../Button/Button';

const Slider = ({ setPage, page, isAuth }) => {
  const [targetCard, setTargetCard] = useState(null);
  const [position, setPosition] = useState(0);

  const dispatch = useDispatch();
  const items = useSelector(getShopItemsSelector);

  useEffect(() => {
    if (items) {
      setTargetCard(items[position]);
    }
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

  function handleAddItemInBasket() {
    const payload = {
      ...targetCard,
      howMany: 1,
    };

    dispatch({
      type: basketActionsType.ADD_ITEM_IN_BASKET,
      payload,
    });
  }
  return (
    targetCard && (
      <div className={classes.wrap}>
        <div className={classes.action}>
          <Button handleOnClick={handleClickSetNextItem}>
            <img src='assets/icons/up.svg' alt='up-arrow' />
          </Button>
          <Button handleOnClick={handleClickSetPreviousItem}>
            <img src='assets/icons/down.svg' alt='down-arrow' />
          </Button>
        </div>
        {isAuth && (
          <div className={classes.btn_add}>
            <Button circle handleOnClick={handleAddItemInBasket}>
              <img src='assets/icons/add.svg' alt='down-arrow' />
            </Button>
          </div>
        )}
        <div className={classes.target}>
          <div className={classes.price}>
            <strong>{targetCard.price}</strong>
            <span>&#8364;</span>
          </div>
          <Link className={classes.link} to={`${ROUTES.DetailsLink}${targetCard.id}`}>
            <h2 className={classes.target_title}>{targetCard.title}</h2>
          </Link>
        </div>
        <div
          className={classes.back}
          style={{
            backgroundImage: `url(${targetCard.image})`,
          }}
        />
        <Carousel
          setPosition={setPosition}
          setTargetCard={setTargetCard}
          setPage={setPage}
          page={page}
          isAuth={isAuth}
          items={items}
        />
      </div>
    )
  );
};

export default Slider;
