// import React, { useContext, useState, useEffect } from 'react';

// import Logo from '../img/logo.png';
import logoModal from './img/logo_modal.png';
import { Wrapper, GlobalStyle } from './style/globalStyle';
import { NavLink } from "react-router-dom";
import FooterAll from '../modal/footer';

import {
    ContainerEnter,
    ModalBlock,
    ModalFormLogin,
    ModalLogo,
    ModalLogoImg,
    ModalInput,
    ModalInputPassword,
    ModalBtnEnter,
    ModalBtnSignup
} from './style/loginStyle';

const MainNotReg = () => {

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <ContainerEnter>
                    <ModalBlock>
                        <ModalFormLogin id="formLogIn" action="#">
                            <ModalLogo>
                                <NavLink to={`/`} replace>
                                    <ModalLogoImg src={logoModal} alt="logo"></ModalLogoImg>
                                </NavLink>
                            </ModalLogo>
                            <ModalInput
                                type="text"
                                name="login"
                                id="formlogin"
                                placeholder="email"
                            />
                            <ModalInputPassword
                                type="password"
                                name="password"
                                id="formpassword"
                                placeholder="Пароль"
                            />
                            <NavLink to={`/profile`} replace>
                                <ModalBtnEnter id="btnEnter">Войти</ModalBtnEnter>
                            </NavLink>
                            <NavLink to={`/registaration`} replace>
                                <ModalBtnSignup id="btnSignUp">Зарегистрироваться</ModalBtnSignup>
                            </NavLink>
                        </ModalFormLogin>
                        <FooterAll media="768px"/>
                    </ModalBlock>
                </ContainerEnter>
            </Wrapper>
        </>
    );
};

export default MainNotReg;