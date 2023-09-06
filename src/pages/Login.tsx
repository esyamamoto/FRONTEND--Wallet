import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import { userEmail } from '../redux/actions';

export function Login() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [buttonOk, setButtonOk] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch(); // criando uma constante apenas para ter acesso a função do dispach, do store que estiver ativo

  const isValid = () => {
    // Regex for Email https://stackoverflow.com/questions/73825083/regex-for-email-a-za-z2-4
    const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    // const emailVerif = emailRegex.test(emailUser);
    // const passwordMin = passwordUser.length >= 6;
    // return emailVerif && passwordMin;
    const { email, password } = userInfo;
    if (password.length >= 6 && email.match(emailRegex)) setButtonOk(false);
    else setButtonOk(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(userEmail(userInfo));
    setUserInfo({
      email: '',
      password: '',
    });
    navigate('/carteira');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        name="email"
        type="email"
        data-testid="email-input"
        onChange={ handleChange }
        value={ userInfo.email }
      />
      <input
        name="password"
        type="password"
        data-testid="password-input"
        onChange={ handleChange }
        value={ userInfo.password }
      />

      <button
        type="submit"
        disabled={ !isValid }
      >
        Entrar
      </button>

    </form>
  );
}
