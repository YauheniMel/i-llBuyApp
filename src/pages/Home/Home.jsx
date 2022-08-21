import { useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import fetchItems from '../../services/fetchItems';

const Home = ({ isAuth, items, dispatch }) => {
  useEffect(() => {

    fetchItems()
      .then((items) => dispatch({
        type: 'SET_ITEMS',
        payload: items
      }))
      .catch((error) => alert(error))
      .finally(() => console.log('Fetched'));

  }, []);

  return (
    <section>
      <Slider isAuth={isAuth} items={items} dispatch={dispatch}/>
    </section>
  )
}

export default Home;
