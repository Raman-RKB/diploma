// import React, { useContext, useState, useEffect } from 'react';

// import Logo from '../img/logo.png';

import { Wrapper, GlobalStyle } from './style/globalStyle';
// import { NavLink } from "react-router-dom";

import {
    ContainerBg,
    ModalBlock,
    ModalTitle,
    ModalBtnClose,
    ModalBtnCloseLine,
    ModalFormNewArt,
    FormNewArtBlock,
    FormNewArtLabel,
    FormNewArtInput,
    FormNewArtArea,
    FormNewArtP,
    FormNewArtPSpan,
    FormNewArtBarImg,
    FormNewArtImgContainer,
    FormNewArtImg,
    FormNewArtImgCover,
    FormNewArtBlockPrice,
    FormNewArtInputPrice,
    FormNewArtInputPriceCover,
    FormNewArtBtnPub,
    ModalContent
} from './style/newADVTStyle';

const MainNotReg = () => {

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <ContainerBg>
                    <ModalBlock>
                        <ModalContent>
                            <ModalTitle>Новое объявление</ModalTitle>
                            <ModalBtnClose>
                                <ModalBtnCloseLine></ModalBtnCloseLine>
                            </ModalBtnClose>
                            <ModalFormNewArt>
                                <FormNewArtBlock>
                                    <FormNewArtLabel for="name">Название</FormNewArtLabel>
                                    <FormNewArtInput type="text" name="name" id="formName"
                                        placeholder="Введите название" />
                                </FormNewArtBlock>
                                <FormNewArtBlock>
                                    <FormNewArtLabel for="text">Описание</FormNewArtLabel>
                                    <FormNewArtArea name="text" id="formArea" cols="auto" rows="10"
                                        placeholder="Введите описание"></FormNewArtArea>
                                </FormNewArtBlock>
                                <FormNewArtBlock>
                                    <FormNewArtP>Фотографии товара<FormNewArtPSpan>не более 5 фотографий</FormNewArtPSpan></FormNewArtP>
                                    <FormNewArtBarImg>
                                        <FormNewArtImgContainer>
                                            <FormNewArtImg />
                                            <FormNewArtImgCover></FormNewArtImgCover>
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer>
                                            <FormNewArtImg />
                                            <FormNewArtImgCover></FormNewArtImgCover>
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer>
                                            <FormNewArtImg />
                                            <FormNewArtImgCover></FormNewArtImgCover>
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer>
                                            <FormNewArtImg />
                                            <FormNewArtImgCover></FormNewArtImgCover>
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer>
                                            <FormNewArtImg />
                                            <FormNewArtImgCover></FormNewArtImgCover>
                                        </FormNewArtImgContainer>
                                    </FormNewArtBarImg>
                                </FormNewArtBlock>
                                <FormNewArtBlockPrice>
                                    <FormNewArtLabel for="price">Цена</FormNewArtLabel>
                                    <FormNewArtInputPrice type="text" name="price" id="formName"></FormNewArtInputPrice>
                                    <FormNewArtInputPriceCover></FormNewArtInputPriceCover>
                                </FormNewArtBlockPrice>
                                <FormNewArtBtnPub id="btnPublish">Опубликовать</FormNewArtBtnPub>
                            </ModalFormNewArt>
                        </ModalContent>
                    </ModalBlock>
                </ContainerBg>
            </Wrapper>
        </>
    );
};

export default MainNotReg;