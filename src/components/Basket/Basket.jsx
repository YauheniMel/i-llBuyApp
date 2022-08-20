import classes from './Basket.module.css';

const Basket = ({ items }) => (
  <div className={classes.wrap}>
    <span>
      В корзине {items.length} товаров на сумму Y
    </span>
    <object type="image/svg+xml" data="assets/icons/basket.svg">
      <img src="image/svg+xml" alt="basket" />
    </object>
    <strong>{items?.length}</strong>
  </div>
)

export default Basket;
