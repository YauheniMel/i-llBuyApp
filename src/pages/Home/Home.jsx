import { useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import fetchItems from '../../services/fetchItems';

const Home = ({ isAuth, items, dispatch, setError }) => {
  useEffect(() => {

    fetchItems()
      .then((items) => dispatch({
        type: 'SET_ITEMS',
        payload: items
      }))
      .catch((error) => setError(error.message))
      .finally(() => console.log('Fetched'));

  }, []);

  return (
    <section>
      <Slider isAuth={isAuth} items={items} dispatch={dispatch}/>
    </section>
  )
}

export default Home;
