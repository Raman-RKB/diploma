/* eslint-disable no-debugger */
import React, { useState } from 'react';
import {
    RegistrationContainer,
    GlobalStyle,
    RegistrationLoginInput,
    RegistrationEmailInput,
    RegistrationPasswordInput,
    RepeatPasswordInput,
    RegistrationButtonInRegistrationForm
} from './css/registrationStyle';
import Logo from './img/logo.png';
import { register, token } from '../../Store/API/reg';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//Эта функция должна быть в отдельном файле
export const saveToken = (token) => {
    return {
        type: "SAVE_TOKEN",
        payload: token
    };
};

function Registration() {
    const [username, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (password === repeatPassword) {
            setCheckPassword(password)

            const userData = { username, email, password: checkPassword };
            const resultReg = await register(userData);
            console.log(resultReg);

            const resultToken = await token(userData);
            console.log(resultToken);
            dispatch(saveToken(resultToken));

            localStorage.setItem("token", JSON.stringify(resultToken));
            
            if (resultReg.id) {
                navigate("/", { replace: true });
            } else {
                console.log('ошибки!!!');
            }

        } else {
            alert("Пароли не совпадают")
        };
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

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
    }

    return (
        <>
            <GlobalStyle />
            <RegistrationContainer>
                <img src={Logo} alt="" />
                <RegistrationLoginInput type="text" placeholder='Логин' value={username} onChange={handleLoginChange} />
                <RegistrationEmailInput type="text" placeholder='e-mail' value={email} onChange={handleEmailChange} />
                <RegistrationPasswordInput placeholder='Пароль' value={password} onChange={handlePasswordChange} />
                <RepeatPasswordInput placeholder='Повторите пароль' value={repeatPassword} onChange={handleRepeatPasswordChange} />
                <RegistrationButtonInRegistrationForm onClick={handleRegister}>Зарегистрироваться</RegistrationButtonInRegistrationForm>
            </RegistrationContainer>
        </>
    );
}

export default Registration;