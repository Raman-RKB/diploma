import { Wrapper, GlobalStyle } from './style/globalStyle';
import { useUploaNewADVTMutation } from '../../services/servises';
import React, { useState } from 'react';

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
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState('');
    const [uploaNewADVT] = useUploaNewADVTMutation();

    const handleUploaNewADVT = () => {
        const formData = new FormData();
        formData.append('images', images);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        console.log(formData)
        uploaNewADVT(formData);
    };


    const handleProductPictureUpload = (event) => {
        const selectedFile = event.target.files[0];
        if (!selectedFile) {
            console.log('Файл не выбран');
        } else {
            setImages(selectedFile);
        };
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };

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
                                    <FormNewArtInput onChange={handleTitleChange} type="text" name="name" id="formName"
                                        placeholder="Введите название" />
                                </FormNewArtBlock>
                                <FormNewArtBlock>
                                    <FormNewArtLabel onChange={handleDescriptionChange} for="text">Описание</FormNewArtLabel>
                                    <FormNewArtArea name="text" id="formArea" cols="auto" rows="10"
                                        placeholder="Введите описание"></FormNewArtArea>
                                </FormNewArtBlock>
                                <FormNewArtBlock>
                                    <FormNewArtP >Фотографии товара<FormNewArtPSpan>не более 5 фотографий</FormNewArtPSpan></FormNewArtP>
                                    <FormNewArtBarImg>
                                        <FormNewArtImgContainer>
                                            <FormNewArtImg />
                                            <FormNewArtImgCover onChange={handleProductPictureUpload} type="file"></FormNewArtImgCover>
                                        </FormNewArtImgContainer>
                                    </FormNewArtBarImg>
                                </FormNewArtBlock>
                                <FormNewArtBlockPrice>
                                    <FormNewArtLabel onChange={handlePriceChange} for="price">Цена</FormNewArtLabel>
                                    <FormNewArtInputPrice type="text" name="price" id="formName"></FormNewArtInputPrice>
                                    <FormNewArtInputPriceCover></FormNewArtInputPriceCover>
                                </FormNewArtBlockPrice>
                                <FormNewArtBtnPub onClick={handleUploaNewADVT} id="btnPublish">Опубликовать</FormNewArtBtnPub>
                            </ModalFormNewArt>
                        </ModalContent>
                    </ModalBlock>
                </ContainerBg>
            </Wrapper>
        </>
    );
};

export default MainNotReg;