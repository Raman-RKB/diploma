import { Wrapper, GlobalStyle } from './style/globalStyle';
import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useRefreshTokenMutation } from '../../services/servises';
import { useParams } from "react-router-dom";
import { useGetAdvtByIdQuery } from '../../services/servises';
import { useEditAdvtDataMutation } from '../../services/servises';
import { useAddPhotoMutation } from '../../services/servises';
import { useNavigate } from "react-router-dom";
import { useDeletePhotoMutation } from '../../services/servises';
// import { useGetImgQuery } from '../../services/servises';

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
    const [quantityOfPic, setQuantityOfPic] = useState();
    const navigate = useNavigate();
    // const [imgDelete, setImgDelete] = useState();

    const [refreshToken] = useRefreshTokenMutation();
    let { id } = useParams();
    const { data: advtData } = useGetAdvtByIdQuery(id);
    const [editAdvtData] = useEditAdvtDataMutation(id);
    const [addPhoto] = useAddPhotoMutation();
    const [deletePhoto] = useDeletePhotoMutation();

    const handleUploaNewADVT = async (event) => {
        event.preventDefault();
        await refreshToken()

        const userData = { title, description, price, id };
        await editAdvtData(userData)
        const addPhotoItem = { image, id }

        addPhoto(addPhotoItem)
        setSaveButtonActive(false)
        navigate("/profile", { replace: true });
    };

    const handlePhotoClick = async (event) => {
        event.preventDefault();
        const parentElement = event.target;

        if (parentElement.tagName === 'IMG') {
            await refreshToken()
            const imgURL = parentElement.src;
            const data = { id, imgURL }
            deletePhoto(data)
            
        } else {
            await refreshToken()
            const fileUpload = document.getElementById('file-upload');
            await fileUpload.click();
        }
    };

    const handleProductPictureUpload = (event) => {
        const selectedFile = event.target.files[0];
        if (!selectedFile) {
            console.log('Файл не выбран');
        } else {
            handleAddItemPhoto(selectedFile)
            console.log('Файл выбран');
            setQuantityOfPic(quantityOfPic + 1)
            setSaveButtonActive(true);
        };
    };

    const handleAddItemPhoto = (newItem) => {
        setImage(newItem);
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

    useEffect(() => {
        setQuantityOfPic(advtData?.images?.length)
        console.log(advtData)
    }, [advtData]);

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
                                        defaultValue={advtData?.title}
                                        onChange={handleTitleChange}
                                        type="text"
                                        name="name"
                                        id="formName"
                                        placeholder="Введите название" />
                                </FormNewArtBlock>
                                <FormNewArtBlock>
                                    <FormNewArtLabel for="text">Описание</FormNewArtLabel>
                                    <FormNewArtArea
                                        defaultValue={advtData?.description}
                                        onChange={handleDescriptionChange} name="text" id="formArea" cols="auto" rows="10"
                                        placeholder="Введите описание" />
                                </FormNewArtBlock>
                                <FormNewArtBlock>
                                    <FormNewArtP >Фотографии товара<FormNewArtPSpan>не более 5 фотографий</FormNewArtPSpan></FormNewArtP>
                                    <FormNewArtBarImg>
                                        <FormNewArtImgContainer >
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg
                                                        src={quantityOfPic > 0 ? `http://localhost:8090/${advtData?.images[0]?.url}` : ''}
                                                        id={quantityOfPic > 0 ? 1 : 0}
                                                    />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer >

                                        <FormNewArtImgContainer
                                            display={quantityOfPic < 1 ? 'none' : ''}>
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg
                                                        src={quantityOfPic > 1 ? `http://localhost:8090/${advtData?.images[1]?.url}` : ''}
                                                        id={quantityOfPic > 1 ? 2 : 0}
                                                    />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer
                                            display={quantityOfPic < 2 ? 'none' : ''}>
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg
                                                        src={quantityOfPic > 2 ? `http://localhost:8090/${advtData?.images[2]?.url}` : ''}
                                                        id={quantityOfPic > 2 ? 3 : 0}
                                                    />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer
                                            display={quantityOfPic < 3 ? 'none' : ''}>
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg
                                                        src={quantityOfPic > 3 ? `http://localhost:8090/${advtData?.images[3]?.url}` : ''}
                                                        id={quantityOfPic > 3 ? 4 : 0}
                                                    />
                                                </FormNewArtImgCover>
                                            </FormNewArtImgCoverInputLabel>
                                            <FormNewArtImgCoverInput
                                                onChange={handleProductPictureUpload}
                                                type="file"
                                                id="file-upload"
                                            />
                                        </FormNewArtImgContainer>
                                        <FormNewArtImgContainer
                                            display={quantityOfPic < 4 ? 'none' : ''}>
                                            <FormNewArtImg />
                                            <FormNewArtImgCoverInputLabel for="file-upload">
                                                <FormNewArtImgCover onClick={handlePhotoClick}>
                                                    <AdvtImg
                                                        src={quantityOfPic > 4 ? `http://localhost:8090/${advtData?.images[4]?.url}` : ''}
                                                        id={quantityOfPic > 4 ? 5 : 0}
                                                    />
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
                                        defaultValue={advtData?.price}
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