// import React, { useContext, useState, useEffect } from 'react';

// import Logo from '../img/logo.png';
import logoModal from './img/logo_modal.png';
import { Wrapper, GlobalStyle } from './style/globalStyle';
import { NavLink } from "react-router-dom";
import FooterAll from '../modal/footer';

import {
    ModalBtnSignupEnt,
    ContainerSignup,
    ModalBlock,
    ModalFormLogin,
    ModalLogo,
    LogoImg,
    ModalInput
} from './style/registrationStyle';

const Registration = () => {

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <ContainerSignup>
                    <ModalBlock>
                        <ModalFormLogin id="formLogIn" action="#">
                            <ModalLogo>
                                <LogoImg src={logoModal} alt="logo" />
                            </ModalLogo>
                            <ModalInput type="text" name="login" id="loginReg" placeholder="email" />
                            <ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль" />
                            <ModalInput type="password" name="password" id="passwordSecond" placeholder="Повторите пароль" />
                            <ModalInput type="text" name="first-name" id="first-name" placeholder="Имя (необязательно)" />
                            <ModalInput type="text" name="first-last" id="first-last" placeholder="Фамилия (необязательно)" />
                            <ModalInput type="text" name="city" id="city" placeholder="Город (необязательно)" />
                            <NavLink to={`/profile`} replace>
                                <ModalBtnSignupEnt id="btnSignUp">Зарегистрироваться</ModalBtnSignupEnt>
                            </NavLink>
                        </ModalFormLogin>
                    </ModalBlock>
                </ContainerSignup>
                <FooterAll media="768px" />
            </Wrapper>
        </>
    );
};

export default Registration;