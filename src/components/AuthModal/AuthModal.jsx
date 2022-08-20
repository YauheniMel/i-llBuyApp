import classes from './AuthModal.module.css';

const AuthModal = () => (
  <>
    <div className={classes.back}>
    </div>
    <div className={classes.wrap}>
      <form action="">
        <input className={classes.input} type="text" name="" id="" />
        <input className={classes.input} type="password" name="" id="" />
        <div className={classes.action}>
          <button type="submit">Войти</button>
          <button type="reset">Отмена</button>
        </div>
        <button
          className={classes.closeBtn}
          type="reset"
        >&#9587;</button>
      </form>
    </div>
  </>
)

export default AuthModal;
