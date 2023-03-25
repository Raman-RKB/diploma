/* eslint-disable no-debugger */
// import React, { useContext, useState, useEffect } from 'react';
import Logo from './img/logo.png';
import LogoMob from './img/logo-mob.png';
import FooterAll from '../modal/footer';
// import CardsItemRender from '../modal/cardsitem';

import { NavLink } from "react-router-dom";
import { Wrapper, GlobalStyle } from './style/globalStyle';
import { useGetCurrentUserMutation } from '../../services/servises';
import { useRefreshTokenMutation } from '../../services/servises';
import { useGetCurrentUserAdvtQuery } from '../../services/servises';
import React, { useEffect } from 'react';

import {
    Container,
    Header,
    HeaderNav,
    HeaderBtnMainEnter,
    MainContainer,
    MainTitle,
    MainContent,
    HeaderBtnLk,
    MainCenterBlock,
    HeaderLogo,
    LogoMobImg,
    MainMenu,
    MenuLogoLink,
    MenuLogoImg,
    MenuForm,
    MenuBtn,
    MainH2,
    MainProfile,
    ProfileContent,
    ProfileTitle,
    ProfileSettings,
    SettingsLeft,
    SettingsChangePhoto,
    SettingsRight,
    SettingsForm,
    SettingsDiv,
    SettingsFormLabel,
    SettingsFormInput,
    SettingsBtn,
    SettingsPhoneInput,
    SettingsImgContainer,
    SettingsImg,
    ContentCards,
} from './style/profileStyle';

const Profile = () => {
    
    const [getCurrentUser, { data: currentUser }] = useGetCurrentUserMutation();
    const [getCurrentUserAdvt] = useGetCurrentUserAdvtQuery();
    const [refreshToken] = useRefreshTokenMutation();

    useEffect(() => {
        const fetchUserData = async () => {
            await refreshToken();
            await getCurrentUser();
        };
        fetchUserData();
    }, []);

    useEffect(() => {
        if (currentUser) {
            getCurrentUserAdvt();
        }
    }, [currentUser]);

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <Container>
                    <Header>
                        <HeaderNav>
                            <HeaderLogo>
                                <NavLink to={`/`} replace>
                                    <LogoMobImg src={LogoMob} />
                                </NavLink>
                            </HeaderLogo>
                            <NavLink to={`/addnewat`} replace>
                                <HeaderBtnMainEnter>Разместить объявление</HeaderBtnMainEnter>
                            </NavLink>
                            <NavLink to={`/profile`} replace>
                                <HeaderBtnLk >Личный кабинет</HeaderBtnLk>
                            </NavLink>
                        </HeaderNav>
                    </Header>
                    <main>
                        <MainContainer>
                            <MainCenterBlock>
                                <MainMenu>
                                    <MenuLogoLink>
                                        <MenuLogoImg src={Logo} alt="logo" />
                                    </MenuLogoLink>
                                    <MenuForm>
                                        <NavLink to={`/`} replace>
                                            <MenuBtn id="btnGoBack">Вернуться на&nbsp;главную</MenuBtn>
                                        </NavLink>
                                    </MenuForm>
                                </MainMenu>
                                <MainH2>Здравствуйте, {currentUser?.name}!</MainH2>
                                <MainProfile>
                                    <ProfileContent>
                                        <ProfileTitle>Настройки профиля</ProfileTitle>
                                        <ProfileSettings>
                                            <SettingsLeft>
                                                <SettingsImgContainer>
                                                    <SettingsImg />
                                                </SettingsImgContainer>
                                                <SettingsChangePhoto>Заменить</SettingsChangePhoto>
                                            </SettingsLeft>
                                            <SettingsRight>
                                                <SettingsForm>
                                                    <SettingsDiv>
                                                        <SettingsFormLabel for="settings-fname">Имя</SettingsFormLabel>
                                                        <SettingsFormInput id="settings-fname" name="fname" type="text" />
                                                    </SettingsDiv>
                                                    <SettingsDiv>
                                                        <SettingsFormLabel for="lname">Фамилия</SettingsFormLabel>
                                                        <SettingsFormInput id="settings-lname" name="lname" type="text" />
                                                    </SettingsDiv>
                                                    <SettingsDiv>
                                                        <SettingsFormLabel for="city">Город</SettingsFormLabel>
                                                        <SettingsFormInput id="settings-city" name="city" type="text" />
                                                    </SettingsDiv>
                                                    <SettingsDiv>
                                                        <SettingsFormLabel for="phone">Телефон</SettingsFormLabel>
                                                        <SettingsPhoneInput id="settings-phone" name="phone" type="tel" />
                                                    </SettingsDiv>
                                                    <SettingsBtn id="settings-btn">Сохранить</SettingsBtn>
                                                </SettingsForm>
                                            </SettingsRight>
                                        </ProfileSettings>
                                    </ProfileContent>
                                </MainProfile>
                                <MainTitle>Мои товары</MainTitle>
                            </MainCenterBlock>

                            <MainContent>
                                <ContentCards>
                                    {/* {getCurrentUserAdvt?.data.map((item) => (
                                        <CardsItemRender
                                            key={item?.id}
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            place={item.user.city}
                                            date={item.created_on.split("T")[0]}
                                            picture={`http://localhost:8090/${item.images[0]?.url}`}
                                        />
                                    ))} */}
                                </ContentCards>
                            </MainContent>
                        </MainContainer>
                    </main >
                    <FooterAll media="620px" />
                </Container>
            </Wrapper>
        </>
    );
};

export default Profile;