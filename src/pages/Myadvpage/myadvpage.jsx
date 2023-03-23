// import React, { useContext, useState, useEffect } from 'react';
import Logo from './img/logo.png';
import LogoMob from './img/logo-mob.png';
import FooterAll from '../modal/footer';

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
    Maintitle,
    MainContent,
    MainText,
    MainArtic,
    ArticContent,
    ArticleLeft,
    ArticleImgContainer,
    ArticleFillImg,
    ArticleImg,
    ArticleImgBar,
    ArticleImgBarDiv,
    ArticleImgBarDivImg,
    ArticleImgBarMob,
    ImgBarMobCircle,
    ArticleRight,
    ArticleBlock,
    ArticleTitle,
    ArticleInfo,
    ArticleDate,
    ArticleCity,
    ArticleLink,
    ArticlePrice,
    ArticleBtnBlock,
    ArticleBtnRedact,
    ArticleBtnRemove,
    ArticleAuthor,
    AuthorImgContainer,
    AuthorImg,
    AuthorCont,
    AuthorName,
    AuthorAbout
} from './style/productStyle';

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
                            </MainCenterBlock>
                        </MainContainer>
                        <MainArtic>
                            <ArticContent>
                                <ArticleLeft>
                                    <ArticleFillImg>
                                        <ArticleImgContainer>
                                            <ArticleImg />
                                        </ArticleImgContainer>
                                        <ArticleImgBar>
                                            <ArticleImgBarDiv>
                                                <ArticleImgBarDivImg />
                                            </ArticleImgBarDiv>
                                            <ArticleImgBarDiv>
                                                <ArticleImgBarDivImg />
                                            </ArticleImgBarDiv>
                                            <ArticleImgBarDiv>
                                                <ArticleImgBarDivImg />
                                            </ArticleImgBarDiv>
                                            <ArticleImgBarDiv>
                                                <ArticleImgBarDivImg />
                                            </ArticleImgBarDiv>
                                            <ArticleImgBarDiv>
                                                <ArticleImgBarDivImg />
                                            </ArticleImgBarDiv>
                                            <ArticleImgBarDiv>
                                                <ArticleImgBarDivImg />
                                            </ArticleImgBarDiv>
                                        </ArticleImgBar>
                                        <ArticleImgBarMob>
                                            <ImgBarMobCircle active='#FFFFFF'></ImgBarMobCircle>
                                            <ImgBarMobCircle active=''></ImgBarMobCircle>
                                            <ImgBarMobCircle active=''></ImgBarMobCircle>
                                            <ImgBarMobCircle active=''></ImgBarMobCircle>
                                            <ImgBarMobCircle active=''></ImgBarMobCircle>
                                        </ArticleImgBarMob>
                                    </ArticleFillImg>
                                </ArticleLeft>
                                <ArticleRight>
                                    <ArticleBlock>
                                        <NavLink to={`/product`} replace>
                                            <ArticleTitle>Ракетка для большого тенниса Triumph Pro STС Б/У</ArticleTitle>
                                        </NavLink>
                                        <ArticleInfo>
                                            <ArticleDate>Сегодня в 10:45</ArticleDate>
                                            <ArticleCity>Санкт-Петербург</ArticleCity>
                                            <NavLink to={`/reviews`} replace>
                                                <ArticleLink>4 отзыва</ArticleLink>
                                            </NavLink>
                                        </ArticleInfo>
                                        <ArticlePrice>2 200 ₽</ArticlePrice>
                                        <ArticleBtnBlock>
                                            <NavLink to={`/settings`} replace>
                                                <ArticleBtnRedact>Редактировать</ArticleBtnRedact>
                                            </NavLink>
                                            <ArticleBtnRemove>Снять с публикации</ArticleBtnRemove>
                                        </ArticleBtnBlock>
                                        <ArticleAuthor>
                                            <AuthorImgContainer>
                                                <AuthorImg />
                                            </AuthorImgContainer>
                                            <AuthorCont>
                                                <AuthorName>Антон</AuthorName>
                                                <AuthorAbout>Продает товары с&nbsp;мая 2022</AuthorAbout>
                                            </AuthorCont>
                                        </ArticleAuthor>
                                    </ArticleBlock>
                                </ArticleRight>
                            </ArticContent>
                        </MainArtic>
                        <MainContainer>
                            <Maintitle>
                                Описание товара
                            </Maintitle>
                            <MainContent>
                                <MainText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et minus saepe iste autem aliquam dolores totam at iure cum. Autem, aliquid architecto perspiciatis earum iure mollitia odit doloremque accusamus.
                                </MainText>
                            </MainContent>
                        </MainContainer>
                    </main >
                    <FooterAll media="768px" />
                </Container>
            </Wrapper>
        </>
    );
};

export default MainNotReg;