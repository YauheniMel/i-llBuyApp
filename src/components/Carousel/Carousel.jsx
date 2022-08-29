import { useState } from 'react';
import Card from '../../components/Card/Card';
import Button from '../Button/Button';
import classes from './Carousel.module.css';

const Carousel = ({ isAuth, setPage, page, setPosition, setTargetCard, items }) => {
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
    <div className={`${classes.carousel} ${classes[classValue]}`} onScroll={handleScrollChangePage}>
      <Button position={'sticky'} handleOnClick={() => setIsHiddenCarousel(!isHiddenCarousel)}>
        {isHiddenCarousel ? (
          <img src='assets/icons/left.svg' alt='left-arrow' />
        ) : (
          <img src='assets/icons/right.svg' alt='right-arrow' />
        )}
      </Button>
      {items.map((item) => (
        <Card isAuth={isAuth} key={item.id} item={item} setTargetCard={handleSetTargetCard} />
      ))}
    </div>
  );
};

export default Carousel;
