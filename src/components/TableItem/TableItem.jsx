import { useDispatch } from 'react-redux';
import { basketActionsType } from '../../store/actions/basket';
import classes from './TableItem.module.css';

const TableItem = ({ howMany, id, title, price }) => {
  const dispatch = useDispatch();

  function handleClickDeleteLine(id) {
    dispatch({
      type: basketActionsType.DELETE_LINE_IN_BASKET,
      payload: { id },
    });
  }

  function handleDecreaseItem() {
    if (howMany === 0) return false;
    dispatch({
      type: basketActionsType.SET_NUM_ITEM_IN_BASKET,
      payload: { howMany: --howMany, id },
    });
  }

  function handleIncreaseItem() {
    dispatch({
      type: basketActionsType.SET_NUM_ITEM_IN_BASKET,
      payload: { howMany: ++howMany, id },
    });
  }

  return (
    <tr className={classes.wrap} key={id}>
      <th>{id}</th>
      <td className={classes.title}>{title}</td>
      <td>{price}&#8364;</td>
      <td>
        <div className={classes.howMany}>
          <span onClick={handleDecreaseItem} className={classes.decrease}>
            -
          </span>
          <input className={classes.input} min='0' type='number' name='howMany' value={howMany} />
          <span onClick={handleIncreaseItem} className={classes.increase}>
            +
          </span>
        </div>
      </td>
      <td>{(howMany * price).toFixed(2)}&#8364;</td>
      <td>
        <button className={classes.del_btn} onClick={() => handleClickDeleteLine(id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
