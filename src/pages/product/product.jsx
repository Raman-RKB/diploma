/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
// import React, { useContext, useState, useEffect } from 'react';
import Logo from './img/logo.png';
import LogoMob from './img/logo-mob.png';
import FooterAll from '../modal/footer';
import { useParams } from "react-router-dom";
import { useGetAlladvtQuery } from '../../services/servises';
import { NavLink } from "react-router-dom";
import { Wrapper, GlobalStyle } from './style/globalStyle';
import React, { useState, useEffect } from 'react';

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
    ArticleAuthor,
    AuthorImgContainer,
    AuthorImg,
    AuthorCont,
    AuthorName,
    AuthorAbout,
    ArticleBtn,
    ArticleBtnSpan
} from './style/productStyle';

const MainNotReg = () => {
    const [adv, setAdv] = useState();
    const [showPhone, setShowPhone] = useState(false);
    const { data } = useGetAlladvtQuery();
    let { id } = useParams();
    
    const showPhoneClick = () => {
        setShowPhone(true)
    };

    useEffect(() => {
        let i = 0
        let idNum = parseInt(id);
        for (i = 0; i < data?.length; i++) {
            if (data[i].id === idNum) {
                setAdv(data[i])
                break;
            }
        }
    }, [data, id]);

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
                                            <ArticleImg src={`http://localhost:8090/${adv?.images[0]?.url}`} />
                                        </ArticleImgContainer>
                                        <ArticleImgBar>
                                            <ArticleImgBarDiv>
                                                <ArticleImgBarDivImg src={`http://localhost:8090/${adv?.images[1]?.url}`} />
                                            </ArticleImgBarDiv>
                                            <ArticleImgBarDiv>
                                                <ArticleImgBarDivImg src={`http://localhost:8090/${adv?.images[2]?.url}`} />
                                            </ArticleImgBarDiv>
                                            <ArticleImgBarDiv>
                                                <ArticleImgBarDivImg src={`http://localhost:8090/${adv?.images[3]?.url}`} />
                                            </ArticleImgBarDiv>
                                            <ArticleImgBarDiv>
                                                <ArticleImgBarDivImg src={`http://localhost:8090/${adv?.images[4]?.url}`} />
                                            </ArticleImgBarDiv>
                                            <ArticleImgBarDiv>
                                                <ArticleImgBarDivImg src={`http://localhost:8090/${adv?.images[5]?.url}`} />
                                            </ArticleImgBarDiv>
                                            <ArticleImgBarDiv>
                                                <ArticleImgBarDivImg src={`http://localhost:8090/${adv?.images[6]?.url}`} />
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
                                        <ArticleTitle>{adv?.title}</ArticleTitle>
                                        <ArticleInfo>
                                            <ArticleDate>{adv?.created_on.split("T")[0]}</ArticleDate>
                                            <ArticleCity>{adv?.user.city}</ArticleCity>
                                            <NavLink to={`/reviews`} replace>
                                                <NavLink to={`/reviews/${id}`} replace>
                                                    <ArticleLink>отзывы</ArticleLink>
                                                </NavLink>
                                            </NavLink>
                                        </ArticleInfo>
                                        <ArticlePrice>{adv?.price}</ArticlePrice>
                                        <ArticleBtn onClick={showPhoneClick}>Показать&nbsp;телефон
                                            <ArticleBtnSpan>
                                                {!showPhone
                                                    ? `${adv?.user.phone.substring(0, 1)}${adv?.user.phone.substring(1, 4)} XXX XX XX`
                                                    : adv?.user.phone
                                                }
                                            </ArticleBtnSpan>
                                        </ArticleBtn>
                                        <ArticleAuthor>
                                            <AuthorImgContainer>
                                                <AuthorImg src={`http://localhost:8090/${adv?.user.avatar}`} />
                                            </AuthorImgContainer>
                                            <AuthorCont>
                                                <NavLink to={`/seller/${id}`} replace>
                                                    <AuthorName>{adv?.user.name}</AuthorName>
                                                </NavLink>
                                                <AuthorAbout>Продает товары с&nbsp;{adv?.user.sells_from}</AuthorAbout>
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
                                    {adv?.description}
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