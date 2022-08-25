import classes from './Basket.module.css';

const Basket = ({ items }) => {
  function getTotalNumberItems(items) {
    return items.reduce((prev, { howMany }) => prev + howMany, 0);
  }

  function getTotalPrice(items) {
    const sum = items.reduce((prev, { price, howMany }) => prev + price * howMany, 0);

    return sum.toFixed(2);
  }

  return (
    <div className={classes.wrap}>
      <span>
        В корзине {getTotalNumberItems(items)} товаров на сумму {getTotalPrice(items)}
        <span>&#8364;</span>
      </span>
      <img src='assets/icons/basket.svg' alt='basket' />
      <strong>{getTotalNumberItems(items)}</strong>
    </div>
  );
};

export default Basket;
