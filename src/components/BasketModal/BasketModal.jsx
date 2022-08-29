import TableItem from '../TableItem/TableItem';
import { useDispatch } from 'react-redux';
import classes from './BasketModal.module.css';
import { basketActionsType } from '../../store/actions/basket';

const BasketModal = ({ showBasket, setShowBasket, items, sum }) => {
  const dispatch = useDispatch();

  function handleClearBasket() {
    dispatch({
      type: basketActionsType.CLEAR_BASKET,
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>How many</th>
          <th>Amount</th>
          <th>:</th>
        </tr>
      </thead>
      <tbody>
        {items.length > 0 ? (
          items.map((item, idx) => <TableItem key={idx} {...item} />)
        ) : (
          <td colspan='6' className={classes.table_placeholder}>
            Корзина пустая
          </td>
        )}
      </tbody>
      <tfoot>
        <tr>
          <td colspan='6'>
            <div className={classes.action}>
              <strong>{sum}&#8364;</strong>
              <div>
                <button onClick={handleClearBasket}>Очистить корзину</button>
                <button className={classes.pay_btn} disabled={!items.length}>
                  Оплатить
                </button>
              </div>
            </div>
            <button className={classes.close_btn} onClick={() => setShowBasket(false)}>
              <img height={'20px'} src='assets/icons/up.svg' alt='up-arrow' />
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default BasketModal;
