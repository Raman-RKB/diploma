/* eslint-disable no-debugger */
// import React, { useContext, useState, useEffect } from 'react';
import Logo from './img/logo.png';
import LogoMob from './img/logo-mob.png';
import FooterAll from '../modal/footer';
import CardsItemRender from '../modal/cardsitem';

import { NavLink } from "react-router-dom";
import { Wrapper, GlobalStyle } from './style/globalStyle';
import { useGetCurrentUserMutation } from '../../services/servises';
import { useRefreshTokenMutation } from '../../services/servises';
import { useEditUserDataMutation } from '../../services/servises';
import { useUploadUserAvatarMutation } from '../../services/servises';
import { useGetCurrentUserAdvtQuery } from '../../services/servises';
import React, { useState, useEffect } from 'react';

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
    SettingsChangePhotoLable,
    SettingsChangePhotoButton
} from './style/profileStyle';

const Profile = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');

    const [getCurrentUser, { data: currentUser }] = useGetCurrentUserMutation();
    const [editUserData] = useEditUserDataMutation();
    const [uploadUserAvatar] = useUploadUserAvatarMutation();
    const { data } = useGetCurrentUserAdvtQuery();
    const [refreshToken] = useRefreshTokenMutation();

    const handleSaveChanges = async (event) => {
        event.preventDefault();
        await refreshToken();
        const userData = { phone, name, surname, city };
        editUserData(userData);
    };

    const handleAvatarClick = (event) => {
        event.preventDefault();
        const fileUpload = document.getElementById('file-upload');
        fileUpload.click();
    }

    const handleAvatarUpload = (event) => {
        const selectedFile = event.target.files[0];
        if (!selectedFile) {
            console.log('Файл не выбран');
        } else {
            const formData = new FormData();
            formData.append('file', selectedFile);
            uploadUserAvatar(formData)

        };
    }


    useEffect(() => {
        const fetchUserData = async () => {
            await refreshToken();
            await getCurrentUser();
        };
        fetchUserData();
    }, []);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

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
                                                    <SettingsImg src={`http://localhost:8090/${currentUser?.avatar}`} />
                                                </SettingsImgContainer >
                                                <SettingsChangePhotoLable for="file-upload">
                                                    <SettingsChangePhotoButton onClick={handleAvatarClick}>Загрузить</SettingsChangePhotoButton>
                                                </SettingsChangePhotoLable>
                                                <SettingsChangePhoto id="file-upload" type="file" onChange={handleAvatarUpload}></SettingsChangePhoto>
                                            </SettingsLeft>
                                            <SettingsRight>
                                                <SettingsForm>
                                                    <SettingsDiv>
                                                        <SettingsFormLabel for="settings-fname">Имя</SettingsFormLabel>
                                                        <SettingsFormInput onChange={handleNameChange} id="settings-fname" name="fname" type="text" />
                                                    </SettingsDiv>
                                                    <SettingsDiv>
                                                        <SettingsFormLabel for="lname">Фамилия</SettingsFormLabel>
                                                        <SettingsFormInput onChange={handleSurnameChange} id="settings-lname" name="lname" type="text" />
                                                    </SettingsDiv>
                                                    <SettingsDiv>
                                                        <SettingsFormLabel for="city">Город</SettingsFormLabel>
                                                        <SettingsFormInput onChange={handleCityChange} id="settings-city" name="city" type="text" />
                                                    </SettingsDiv>
                                                    <SettingsDiv>
                                                        <SettingsFormLabel for="phone">Телефон</SettingsFormLabel>
                                                        <SettingsPhoneInput onChange={handlePhoneChange} id="settings-phone" name="phone" type="tel" />
                                                    </SettingsDiv>
                                                    <SettingsBtn onClick={handleSaveChanges} id="settings-btn">Сохранить</SettingsBtn>
                                                </SettingsForm>
                                            </SettingsRight>
                                        </ProfileSettings>
                                    </ProfileContent>
                                </MainProfile>
                                <MainTitle>Мои товары</MainTitle>
                            </MainCenterBlock>

                            <MainContent>
                                <ContentCards>
                                    {data?.map((item) => (
                                        <CardsItemRender
                                            key={item?.id}
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            place={item.user.city}
                                            date={item.created_on.split("T")[0]}
                                            picture={`http://localhost:8090/${item.images[0]?.url}`}
                                        />
                                    ))}
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