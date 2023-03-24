// import React, { useContext, useState, useEffect } from 'react';

// import Logo from '../img/logo.png';

import { Wrapper, GlobalStyle } from './style/globalStyle';
import ReviewItems from './reviewItem';
import { useParams } from "react-router-dom";
import { useGetAdvtCommentsQuery } from "../../services/servises";
import { NavLink } from "react-router-dom";

import {
    ContainerBg,
    ModalBlock,
    ModalTitle,
    ModalBtnClose,
    ModalBtnCloseLine,
    ModalContent,
    ModalScroll,
    ModalFormNewArt,
    FormNewArtBlock,
    FormNewArtLabel,
    FormNewArtArea,
    FormNewArtBtnPub,
    ModalReviews,
} from './style/reviewStyle';

const MainNotReg = () => {
    let { id } = useParams();
    const { data } = useGetAdvtCommentsQuery(id);

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <ContainerBg>
                    <ModalBlock>
                        <ModalContent>
                            <ModalTitle>Отзывы о товаре</ModalTitle>
                            <ModalBtnClose>
                                <NavLink to={`/product/${id}`} replace>
                                    <ModalBtnCloseLine></ModalBtnCloseLine>
                                </NavLink>
                            </ModalBtnClose>
                            <ModalScroll>
                                <ModalFormNewArt>
                                    <FormNewArtBlock>
                                        <FormNewArtLabel for="text">Добавить отзыв</FormNewArtLabel>
                                        <FormNewArtArea name="text" id="formArea" cols="auto" rows="5"
                                            placeholder="Введите описание"></FormNewArtArea>
                                    </FormNewArtBlock>
                                    <FormNewArtBtnPub>Опубликовать</FormNewArtBtnPub>
                                </ModalFormNewArt>
                                <ModalReviews>
                                    {data && data.map((item) => (
                                        <ReviewItems key={item.id} reviews={item} />
                                    ))}
                                </ModalReviews>
                            </ModalScroll>

                        </ModalContent>
                    </ModalBlock>
                </ContainerBg>
            </Wrapper>
        </>
    );
};

export default MainNotReg;