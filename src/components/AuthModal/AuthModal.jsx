import { useState } from 'react';
import ROUTES from '../../constants/routes';
import { useNavigate } from 'react-router-dom';
import login from '../../services/login';
import classes from './AuthModal.module.css';
import { useDispatch } from 'react-redux';
import { userActionsType } from '../../store/actions/user';

const AuthModal = ({ setIsShowModal }) => {
  const [formData, setFormData] = useState({
    login: 'login',
    password: 'password',
    isValid: true,
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  function handleClickHideModal() {
    setIsShowModal(false);
  }

  function handleChangeInput(e, name) {
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  }

  function handleSubmitLoginUser(e) {
    e.preventDefault();

    const user = login(formData);

    if (!user) {
      setFormData({
        ...formData,
        isValid: false,
      });

      return;
    }

    dispatch({
      type: userActionsType.LOGIN,
      payload: user,
    });

    setIsShowModal(false);

    setFormData({
      login: '',
      password: '',
    });

    return navigate(ROUTES.Root);
  }

  return (
    <>
      <div className={classes.back} />
      <div className={classes.wrap}>
        <form action='' onSubmit={handleSubmitLoginUser}>
          <input
            onChange={(e) => handleChangeInput(e, 'login')}
            value={formData.login}
            className={classes.input}
            type='text'
          />
          <input
            onChange={(e) => handleChangeInput(e, 'password')}
            value={formData.password}
            className={classes.input}
            type='password'
          />
          {formData.isValid || <span>Значение логина или(и) пароля указаны неверно</span>}
          <div className={classes.action}>
            <button type='submit'>Войти</button>
            <button onClick={handleClickHideModal} type='reset'>
              Отмена
            </button>
            <button className={classes.closeBtn} type='reset' onClick={handleClickHideModal}>
              &#9587;
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthModal;
