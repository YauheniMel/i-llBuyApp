import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ROUTES from './constants/routes';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';
import NotFound from './pages/NotFound/NotFound';
import Root from './pages/Root/Root';
import PreLoader from './components/PreLoader/PreLoader';
import { getDataIsFetchingSelector } from './store/selectors/shop';

function App() {
  const isFetching = useSelector(getDataIsFetchingSelector);

  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.Root} element={<Root />}>
          <Route path={ROUTES.Home} element={<Home />} />
          <Route path={ROUTES.About} element={<About />} />
          <Route path={ROUTES.Details} element={<Details />} />
          <Route index element={<Navigate to={ROUTES.Home} />} />
          <Route path={ROUTES.NotFound} element={<NotFound />} />
        </Route>
      </Routes>
      {isFetching && <PreLoader />}
    </div>
  );
}

export default App;
