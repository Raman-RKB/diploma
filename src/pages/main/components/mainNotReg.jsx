// import React, { useContext, useState, useEffect } from 'react';
import CardsItem from "../../modal/cardsitem";
import Logo from '../img/logo.png';
import LogoMob from '../img/logo-mob.png';
import { NavLink } from "react-router-dom";
import FooterAll from '../../modal/footer';
import { allAdv } from '../../../Store/API/api';

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
    ContentCards
} from '../style/mainNotRegStyle';

const HandleSearchClick = () => {

    const getAllArticles = async () => {
        const resutArticles = await allAdv();
        console.log(resutArticles)
    }
    alert(getAllArticles)
}


const MainNotReg = () => {
    return (
        <Container>
            <Header>
                <HeaderNav>
                    <NavLink to={`/login`} replace>
                        <HeaderBtnMainEnter>Вход в личный кабинет</HeaderBtnMainEnter>
                    </NavLink>
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
                        <SearchBtn onClick={HandleSearchClick}>Найти</SearchBtn>
                    </SearchForm>
                </MainSearch>
                <MainContainer>
                    <MainH2>Объявления</MainH2>
                    <MainContent>
                        <ContentCards>
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
                        </ContentCards>
                    </MainContent>
                </MainContainer>
            </main >
            <FooterAll media="590px" />
        </Container>
    );
};

export default MainNotReg;