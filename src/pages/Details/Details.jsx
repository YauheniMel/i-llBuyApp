import classes from './Details.module.css';

const Details = ({ item }) => {
  return (
    <section>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <div className={classes.price}>
        <strong>{item.price}</strong>
        <span>&#8364;</span>
      </div>
      {
        item.images.map((image, idx) => (
          <img key={idx} src={image} alt={item.title} />
        ))
      }
      <div className={classes.btnWrap}>
        <form action="">
          <input type="number" name="" id="" />
          <button className={classes.button}>Добавить в корзину</button>
        </form>
      </div>
    </section>
  )
}

export default Details;
