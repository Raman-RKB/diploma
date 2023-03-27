import { Wrapper, GlobalStyle } from './style/globalStyle';
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useRefreshTokenMutation } from '../../services/servises';
import { useParams } from "react-router-dom";
import { useGetAdvtByIdQuery } from '../../services/servises';
import { useEditAdvtDataMutation } from '../../services/servises';

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
    ModalContent,
    FormNewArtImgCoverInput,
    FormNewArtImgCoverInputLabel,
    AdvtImg
} from './style/newADVTStyle';

const AdvSettings = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState();
    const [image, setImage] = useState([]);
    const [inputAndAvaFilled, setInputAndAvaFilled] = useState();
    const [saveButtonActive, setSaveButtonActive] = useState(false);

    const [refreshToken] = useRefreshTokenMutation();
    let { id } = useParams();
    const { data: advtData } = useGetAdvtByIdQuery(id);
    const [editAdvtData] = useEditAdvtDataMutation(id);

    const handleUploaNewADVT = async (event) => {
        event.preventDefault();

        await refreshToken()
        let images = image[0]
        const userData = { title, description, price, id, images:[images]  };
        // images.forEach((image, index) => {
        //     userData.push(`image${index + 1}`, image);
        // });
        editAdvtData(userData)
    };

    const handlePhotoClick = (event) => {
        event.preventDefault();
        const fileUpload = document.getElementById('file-upload');
        fileUpload.click();

        fileUpload.addEventListener('change', () => {
            if (fileUpload.files && fileUpload.files[0]) {
                setSaveButtonActive(true);
            }
        });
    };

    const handleProductPictureUpload = (event) => {
        const selectedFile = event.target.files[0];
        if (!selectedFile) {
            console.log('Файл не выбран');
        } else {
            handleAddItemPhoto(selectedFile)
            console.log('Файл выбран');
        };
    };

    const handleAddItemPhoto = (newItem) => {
        setImage((prevItems) => prevItems.concat(newItem));
    };

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setInputAndAvaFilled(event.target.value)
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        setInputAndAvaFilled(event.target.value)
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
        document.getElementById("formPrice").removeAttribute("value");

        setInputAndAvaFilled(event.target.value)
    };

    useEffect(() => {
        console.log(image)
    }, [image]);

    useEffect(() => {
        const inputs = document.querySelectorAll('input, textarea');
        let allAreEmpty = true;
        inputs.forEach(input => {
            if (input.value.trim() !== '') {
                allAreEmpty = false;
            }
        });

        if (allAreEmpty) {
            setSaveButtonActive(false)
        } else {
            setSaveButtonActive(true)
        }
    }, [inputAndAvaFilled]);

    return (
        <>
            <GlobalStyle />
            <Wrapper>
                <ContainerBg>
                    <ModalBlock>
                        <ModalContent>
                            <ModalTitle>Редактировать объявление</ModalTitle>
                            <NavLink to={`/profile`} replace>
                                <ModalBtnClose>
                                    <ModalBtnCloseLine></ModalBtnCloseLine>
                                </ModalBtnClose>
                            </NavLink>
                            <ModalFormNewArt>
                                <FormNewArtBlock>
                                    <FormNewArtLabel for="name">Название</FormNewArtLabel>
                                    <FormNewArtInput
                                        // value={advtData?.title}
                                        onChange={handleTitleChange} type="text" name="name" id="formName"
                                        placeholder="Введите название" />
                                </FormNewArtBlock>
                                <FormNewArtBlock>
                                    <FormNewArtLabel for="text">Описание</FormNewArtLabel>
                                    <FormNewArtArea
                                        // value={advtData?.description}
                                        onChange={handleDescriptionChange} name="text" id="formArea" cols="auto" rows="10"
                                        placeholder="Введите описание" />
                                </FormNewArtBlock>
                                <FormNewArtBlock>
                                    <FormNewArtP >Фотографии товара<FormNewArtPSpan>не более 5 фотографий</FormNewArtPSpan></FormNewArtP>
                                    <FormNewArtBarImg>

                                        <FormNewArtImgContainer>
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg src={`http://localhost:8090/${advtData?.images[0]?.url}`} />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer>
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg src={`http://localhost:8090/${advtData?.images[1]?.url}`} />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer>
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg src={`http://localhost:8090/${advtData?.images[2]?.url}`} />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer>
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg src={`http://localhost:8090/${advtData?.images[3]?.url}`} />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer>
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg src={`http://localhost:8090/${advtData?.images[4]?.url}`} />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer>

                                    </FormNewArtBarImg>
                                </FormNewArtBlock>
                                <FormNewArtBlockPrice>
                                    <FormNewArtLabel for="price">Цена</FormNewArtLabel>
                                    <FormNewArtInputPrice
                                        // value={advtData?.price}
                                        onChange={handlePriceChange}
                                        type="text"
                                        name="price"
                                        id="formPrice" />
                                    <FormNewArtInputPriceCover></FormNewArtInputPriceCover>
                                </FormNewArtBlockPrice>
                                <FormNewArtBtnPub
                                    active={!saveButtonActive ? '#D9D9D9' : '#009EE4'}
                                    activeHover={!saveButtonActive ? '#D9D9D9' : '#0080C1'}
                                    onClick={handleUploaNewADVT}
                                    id="btnPublish">
                                    Опубликовать
                                </FormNewArtBtnPub>
                            </ModalFormNewArt>
                        </ModalContent>
                    </ModalBlock>
                </ContainerBg>
            </Wrapper>
        </>
    );
};

export default AdvSettings;