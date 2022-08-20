import { useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import fetchItems from '../../services/fetchItems';

const Home = ({ items, dispatch }) => {
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
      <Slider items={items} />
    </section>
  )
}

export default Home;
