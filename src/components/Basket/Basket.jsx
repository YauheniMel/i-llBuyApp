import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getBasketItemsSelector } from '../../store/selectors/basket';
import BasketModal from '../BasketModal/BasketModal';
import classes from './Basket.module.css';

const Basket = () => {
  const [showBasket, setShowBasket] = useState(false);
  const items = useSelector(getBasketItemsSelector);

  function getTotalNumberItems(items) {
    return items.reduce((prev, { howMany }) => prev + howMany, 0);
  }

  function getTotalPrice(items) {
    const sum = items.reduce((prev, { price, howMany }) => prev + price * howMany, 0);

    return sum.toFixed(2);
  }

  const totalPrice = getTotalPrice(items);

  function handleClickShowBasket() {
    setShowBasket(true);
  }

  return (
    <div className={classes.wrap}>
      <span>
        В корзине {getTotalNumberItems(items)} товаров на сумму {totalPrice}
        <span>&#8364;</span>
      </span>
      <img
        className={classes.image}
        onClick={handleClickShowBasket}
        src='assets/icons/basket.svg'
        alt='basket'
      />
      <strong className={classes.strong}>{getTotalNumberItems(items)}</strong>
      {showBasket && (
        <BasketModal
          showBasket={showBasket}
          setShowBasket={setShowBasket}
          items={items}
          sum={totalPrice}
        />
      )}
    </div>
  );
};

export default Basket;
