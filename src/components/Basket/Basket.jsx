import classes from './Basket.module.css';

const Basket = ({ items }) => {
  function getTotalNumberItems(items) {
    return items.reduce((prev, { howMany }) => prev + howMany, 0)
  }

  function getTotalPrice(items) {
    return items.reduce((prev, { price, howMany }) => prev + price*howMany, 0)
  }

  return (
    <div className={classes.wrap}>
      <span>
        В корзине {getTotalNumberItems(items)} товаров на сумму {getTotalPrice(items)}<span>&#8364;</span>
      </span>
      <object type="image/svg+xml" data="assets/icons/basket.svg">
        <img src="image/svg+xml" alt="basket" />
      </object>
      <strong>{getTotalNumberItems(items)}</strong>
    </div>
  )
}

export default Basket;
