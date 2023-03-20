import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import {
  LoginContainer,
  GlobalStyle,
  LoginInput,
  PasswordInput,
  EnterButton,
  RegistrationButton,
  LoginEmailInput
} from './css/loginStyle';
import Logo from './img/logo.png';
import { login } from '../../Store/API/reg';

function Login() {
  const [username, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleClick = async () => {

    const userData = { username, password, email };
    const resultLog = await login(userData);
    console.log(resultLog);

    if (resultLog.id) {
      navigate(`/main`, { replace: true });
    } else {
      console.log('ошибки!!!');
    }
  };

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <LoginContainer>
        <img src={Logo} alt="" />
        <LoginInput type="text" placeholder='Логин' value={username} onChange={handleLoginChange} />
        <LoginEmailInput type="text" placeholder='e-mail' value={email} onChange={handleEmailChange} />
        <PasswordInput placeholder='Пароль' value={password} onChange={handlePasswordChange} />
        <EnterButton onClick={handleClick}>Войти</EnterButton>
        <NavLink to={`/registration`} replace>
          <RegistrationButton>Зарегистрироваться</RegistrationButton>
        </NavLink>
      </LoginContainer>
    </>
  );
}

export default Login;
