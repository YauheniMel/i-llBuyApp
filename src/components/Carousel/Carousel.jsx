import { useState } from 'react';
import Card from '../../components/Card/Card';
import classes from './Carousel.module.css';

const Carousel = ({
  isAuth,
  items,
  dispatch,
  setError,
  setPage,
  page,
  setPosition,
  setTargetCard,
}) => {
  const [isHiddenCarousel, setIsHiddenCarousel] = useState(true);

  const classValue = isHiddenCarousel ? 'hide' : 'show';

  function handleScrollChangePage(e) {
    const widthItems = e.target.scrollWidth;
    const scroll = e.target.clientWidth + e.target.scrollLeft;

    if (scroll >= widthItems) {
      setPage(page + 1);
    }
  }

  function handleSetTargetCard(id) {
    const [targetCard] = items.filter((item, idx) => {
      if (item.id === id) {
        setPosition(idx);

        return true;
      }
    });

    setTargetCard(targetCard);
  }

  return (
    <>
      <div
        className={classes.wrap}
        onClick={() => {
          setIsHiddenCarousel(true);
        }}
      ></div>
      <div
        className={`${classes.carousel} ${classes[classValue]}`}
        onScroll={handleScrollChangePage}
      >
        <button className={classes.btn} onClick={() => setIsHiddenCarousel(!isHiddenCarousel)}>
          {isHiddenCarousel ? '<' : '>'}
        </button>
        {items.map((item) => (
          <Card
            isAuth={isAuth}
            key={item.id}
            id={item.id}
            title={item.title}
            imageURL={item.image}
            price={item.price}
            dispatch={dispatch}
            setTargetCard={handleSetTargetCard}
            setError={setError}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
