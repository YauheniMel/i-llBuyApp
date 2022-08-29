import { useEffect, useState } from 'react';
import Slider from '../../components/Slider/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { getUserIsAuthSelector } from '../../store/selectors/user';
import { getShopHttpErrorSelector } from '../../store/selectors/shop';
import { fetchItemsThunk } from '../../store/actions/shop';
import classes from './Home.module.css';

const Home = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const isAuth = useSelector(getUserIsAuthSelector);
  const errorMsg = useSelector(getShopHttpErrorSelector);

  useEffect(() => {
    if (errorMsg) {
      throw new Error(errorMsg);
    }
  }, [errorMsg]);

  useEffect(() => {
    dispatch(fetchItemsThunk(page));
  }, [page]);

  return (
    <section>
      <Slider setPage={setPage} page={page} isAuth={isAuth} />
    </section>
  );
};

export default Home;
