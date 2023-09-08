import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userEmail } from '../redux/actions';

function Login() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' });
  const [buttonOk, setButtonOk] = useState(true);
  const { email, password } = userInfo;

  const navigate = useNavigate();
  const dispatch = useDispatch(); // criando uma constante apenas para ter acesso a função do dispach, do store que estiver ativo

  // Função para verificar se os campos de email e senha são válidos
  const isValid = () => {
    // Regex for Email https://stackoverflow.com/questions/73825083/regex-for-email-a-za-z2-4
    const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (userInfo.password.length >= 5 && emailRegex.test(userInfo.email)) { // true - valido form // tem delay cuidado***
      setButtonOk(false);
    } else {
      setButtonOk(true);
    }
  };

  // Função para lidar com mudanças nos campos de entrada
  // ajuda no delay da senha. lenght
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const blablabla = {
      ...userInfo,
      [name]: value,
    };
    setUserInfo(blablabla);
    console.log(blablabla.password.length);
    isValid();
  };
  // console.log(userInfo.password.length);
  // Função para lidar com o envio do formulário de login
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
      <label htmlFor="">
        E-mail:
        {' '}
        <input
          name="email"
          type="email"
          data-testid="email-input"
          onChange={ handleChange }
          value={ userInfo.email }
        />
      </label>

      <label htmlFor="">
        Senha:
        {' '}
        <input
          name="password"
          type="password"
          data-testid="password-input"
          onChange={ handleChange }
          value={ userInfo.password }
        />
      </label>
      <button
        type="submit"
        disabled={ buttonOk }
      >
        Entrar
      </button>

    </form>
  );
}
export default Login;
