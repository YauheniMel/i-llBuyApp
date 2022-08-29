import { useRef } from 'react';
import classes from './Button.module.css';

const Button = ({ children, position, handleOnClick, circle = false }) => {
  const ref = useRef();

  function createRipple(event) {
    const button = event.currentTarget;

    const { left, top } = button.getBoundingClientRect();

    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const spanRippleEl = ref.current;

    spanRippleEl.style.width = spanRippleEl.style.height = `${diameter}px`;
    spanRippleEl.style.left = `${event.clientX - left - radius}px`;
    spanRippleEl.style.top = `${event.clientY - top - radius}px`;

    spanRippleEl.style.display = `block`;

    setTimeout(() => {
      spanRippleEl.style.display = `none`;
    }, 600);
  }

  return (
    <button
      style={{
        position,
        borderRadius: circle ? '50%' : '0',
      }}
      className={classes.button}
      onClick={(e) => {
        createRipple(e);

        handleOnClick();
      }}
    >
      {children}
      <span ref={ref} className={classes.ripple} />
    </button>
  );
};

export default Button;
