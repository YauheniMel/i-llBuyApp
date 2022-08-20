import { useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import fetchItems from '../../services/fetchItems';

const url = 'https://api.escuelajs.co/api/v1/products';

const Home = ({ items, dispatch }) => {
  useEffect(() => {

    fetchItems(url)
      .then((items) => dispatch({
        type: 'SET_ITEMS',
        payload: items
      }))
      .catch((error) => alert(error))
      .finally(() => console.log('Fetched'));

  }, []);

  return (
    <section>
      <Slider items={items} dispatch={dispatch}/>
    </section>
  )
}

export default Home;
