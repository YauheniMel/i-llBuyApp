import { useEffect, useState } from 'react';
import Slider from '../../components/Slider/Slider';
import fetchItems from '../../services/fetchItems';
import classes from './Home.module.css';

const Home = ({ isAuth, items, dispatch }) => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);

  if (error) {
    throw new Error(error);
  }

  useEffect(() => {
    dispatch({
      type: 'SET_IS_FETCHING',
    });

    (async () => {
      try {
        const items = await fetchItems(page);

        dispatch({
          type: 'SET_ITEMS',
          payload: items,
        });
      } catch (err) {
        setError(err);
      } finally {
        dispatch({
          type: 'SET_IS_NOT_FETCHING',
        });
      }
    })();
  }, [page]);

  return (
    <section>
      <Slider
        setPage={setPage}
        page={page}
        isAuth={isAuth}
        items={items}
        dispatch={dispatch}
        setError={setError}
      />
    </section>
  );
};

export default Home;
