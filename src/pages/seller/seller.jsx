// import React, { useContext, useState, useEffect } from 'react';
import Logo from './img/logo.png';
import LogoMob from './img/logo-mob.png';
import FooterAll from '../modal/footer';
import CardsItemRender from './components/cardItem';

import { NavLink } from "react-router-dom";
import { Wrapper, GlobalStyle } from './style/globalStyle';

import {
    Container,
    Header,
    HeaderNav,
    HeaderBtnMainEnter,
    MainContainer,
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
    MainProfileSell,
    ProfileSellContent,
    ProfileSellSeller,
    SellerLeft,
    SellerImgContainer,
    SellerImg,
    SellerRight,
    SellerTitle,
    SellerCity,
    SellerInf,
    SellerImgMobBlock,
    SellerImgMobContainer,
    SellerImgMob,
    SellerBtn,
    SellerBtnSpan,
    MainTitle,
    MainContent,
    Cards
} from './style/sellerStyle';

const MainNotReg = () => {

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
                            <HeaderBtnMainEnter>Разместить объявление</HeaderBtnMainEnter>
                            <HeaderBtnLk>Личный кабинет</HeaderBtnLk>
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
                                <MainH2>Профиль продавца</MainH2>
                                <MainProfileSell>
                                    <ProfileSellContent>
                                        <ProfileSellSeller>
                                            <SellerLeft>
                                                <SellerImgContainer>
                                                    <SellerImg />
                                                </SellerImgContainer>
                                            </SellerLeft>
                                            <SellerRight>
                                                <SellerTitle>Кирилл Матвеев</SellerTitle>
                                                <SellerCity>Санкт-Петербург</SellerCity>
                                                <SellerInf>Продает товары с августа 2021</SellerInf>
                                                <SellerImgMobBlock>
                                                    <SellerImgMobContainer>
                                                        <SellerImgMob />
                                                    </SellerImgMobContainer>
                                                </SellerImgMobBlock>
                                                <SellerBtn>Показать&nbsp;телефон
                                                    <SellerBtnSpan>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</SellerBtnSpan>
                                                </SellerBtn>
                                            </SellerRight>
                                        </ProfileSellSeller>
                                    </ProfileSellContent>
                                </MainProfileSell>
                                <MainTitle>Товары продавца</MainTitle>
                            </MainCenterBlock>
                            <MainContent>
                                <Cards>
                                    <CardsItemRender />
                                    <CardsItemRender />
                                    <CardsItemRender />
                                    <CardsItemRender />
                                    <CardsItemRender />
                                    <CardsItemRender />
                                </Cards>
                            </MainContent>
                        </MainContainer>
                    </main >
 <FooterAll media="580px"/>
                </Container>
            </Wrapper>
        </>
    );
};

export default MainNotReg;