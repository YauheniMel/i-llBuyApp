import AuthModal from '../../components/AuthModal/AuthModal';
import Header from '../../components/Header/Header';
import About from '../About/About';
import Details from '../Details/Details';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import classes from './Root.module.css';

const Root = ({ dispatch, state }) => {
  return (
    <>
      <Header basketItems={state.basketItems} />
      {/* <Home dispatch={dispatch} items={state.items}/> */}
      {/* <Details item={state.targetItem}/> */}
      {/* <About /> */}
      <AuthModal />
    </>
  )
}

export default Root;
