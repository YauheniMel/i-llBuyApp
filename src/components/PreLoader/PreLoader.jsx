import classes from './PreLoader.module.css';

const PreLoader = () => (
  <div className={classes.backdrop}>
    <object className={classes.svg} type='image/svg+xml' data='assets/icons/heart.svg'>
      <img src='assets/icons/heart.svg' alt='heart' />
    </object>
  </div>
);

export default PreLoader;
