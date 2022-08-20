import Card from '../../components/Card/Card';
import classes from './Slider.module.css';

const Slider = ({ items, dispatch }) => (
  <div className={classes.wrap}>
    {
      items.map(item => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          imageURL={item.category.image}
          price={item.price}
          dispatch={dispatch}
        />
      ))
    }
  </div>
)

export default Slider;
