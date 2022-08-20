import { useReducer } from 'react';
import NotFound from './pages/NotFound/NotFound';
import Root from './pages/Root/Root';

const initialState = {
  id: null,
  name: null,
  surname: null,
  items: [],
  targetItem: {
    id: 6,
    title: 'Intelligent Frozen Chips',
    price: 708,
    description:
      'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
    category: {
      id: 2,
      name: 'Electronics',
      image: 'https://api.lorem.space/image/watch?w=640&h=480&r=8371',
    },
    images: [
      'https://api.lorem.space/image/watch?w=640&h=480&r=4140',
      'https://api.lorem.space/image/watch?w=640&h=480&r=7259',
      'https://api.lorem.space/image/watch?w=640&h=480&r=6326',
    ],
  },
  basketItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload,
      };
    case 'SET_ITEM':
      return {
        ...state,
        targetItem: action.payload,
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // control app's state
  window.getState = () => state;
  //

  return (
    <div className='App'>
      <Root state={state} dispatch={dispatch} />
      {/* <NotFound /> */}
    </div>
  );
}

export default App;
