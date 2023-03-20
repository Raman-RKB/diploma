// import React, { useContext, useState, useEffect } from 'react';
import CardsItem from "./cardsitem";
import Logo from '../img/logo.png';
import LogoMob from '../img/logo-mob.png';

import {
    Container,
    Header,
    HeaderNav,
    HeaderBtnMainEnter,
    MainSearch,
    SearchLogoLink,
    SearchLogoImg,
    SearchLogoMobLink,
    SearchLogoMobImg,
    SearchForm,
    SearchText,
    SearchTextMob,
    SearchBtn,
    MainContainer,
    MainH2,
    MainContent,
    Cards
} from '../css/mainNotRegStyle';

const MainNotReg = () => {

    return (
        <Container>
            <Header>
                <HeaderNav>
                    <HeaderBtnMainEnter>Вход в личный кабинет</HeaderBtnMainEnter>
                </HeaderNav>
            </Header>
            <main>
                <MainSearch>
                    <SearchLogoLink>
                        <SearchLogoImg src={Logo}></SearchLogoImg>
                    </SearchLogoLink>
                    <SearchLogoMobLink>
                        <SearchLogoMobImg src={LogoMob}></SearchLogoMobImg>
                    </SearchLogoMobLink>
                    <SearchForm>
                        <SearchText type="search" placeholder="Поиск по объявлениям" name="search" />
                        <SearchTextMob type="search" placeholder="Поиск" name="search-mob" />
                        <SearchBtn>Найти</SearchBtn>
                    </SearchForm>
                </MainSearch>
                <MainContainer>
                    <MainH2>Объявления</MainH2>
                    <MainContent>
                        <Cards>
                            <CardsItem title="Ракетка для большого тенниса Triumph Pro ST"
                                price="2&nbsp;200&nbsp;₽"
                                place="Санкт Петербург"
                                date="Сегодня в&nbsp;10:45" />
                            <CardsItem title="Ракетка для большого тенниса Triumph Pro ST"
                                price="2&nbsp;200&nbsp;₽"
                                place="Санкт Петербург"
                                date="Сегодня в&nbsp;10:45" />
                            <CardsItem title="Ракетка для большого тенниса Triumph Pro ST"
                                price="2&nbsp;200&nbsp;₽"
                                place="Санкт Петербург"
                                date="Сегодня в&nbsp;10:45" />
                            <CardsItem title="Ракетка для большого тенниса Triumph Pro ST"
                                price="2&nbsp;200&nbsp;₽"
                                place="Санкт Петербург"
                                date="Сегодня в&nbsp;10:45" />
                            <CardsItem title="Ракетка для большого тенниса Triumph Pro ST"
                                price="2&nbsp;200&nbsp;₽"
                                place="Санкт Петербург"
                                date="Сегодня в&nbsp;10:45" />
                            <CardsItem title="Ракетка для большого тенниса Triumph Pro ST"
                                price="2&nbsp;200&nbsp;₽"
                                place="Санкт Петербург"
                                date="Сегодня в&nbsp;10:45" />
                            <CardsItem title="Ракетка для большого тенниса Triumph Pro ST"
                                price="2&nbsp;200&nbsp;₽"
                                place="Санкт Петербург"
                                date="Сегодня в&nbsp;10:45" />
                            <CardsItem title="Ракетка для большого тенниса Triumph Pro ST"
                                price="2&nbsp;200&nbsp;₽"
                                place="Санкт Петербург"
                                date="Сегодня в&nbsp;10:45" />
                            <CardsItem title="Ракетка для большого тенниса Triumph Pro ST"
                                price="2&nbsp;200&nbsp;₽"
                                place="Санкт Петербург"
                                date="Сегодня в&nbsp;10:45" />
                            <CardsItem title="Ракетка для большого тенниса Triumph Pro ST"
                                price="2&nbsp;200&nbsp;₽"
                                place="Санкт Петербург"
                                date="Сегодня в&nbsp;10:45" />
                        </Cards>
                    </MainContent>
                </MainContainer>
            </main >
        </Container>
    );
};

export default MainNotReg;