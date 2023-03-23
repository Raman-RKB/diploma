// import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import {
    CardsItem,
    СardsСard,
    CardImageContainer,
    CardImage,
    CardTitle,
    CardPrice,
    CardPlace,
    CardDate,
    CardInfoContainer
} from '../style/sellerStyle';

const CardsItemRender = () => {

    return (
        <CardsItem>
            <СardsСard>
                <CardImageContainer>
                    <NavLink to={`/product`} replace>
                        <CardImage />
                    </NavLink>
                </CardImageContainer>
                <CardInfoContainer>
                    <NavLink to={`/product`} replace>
                        <CardTitle>Ракетка для большого тенниса Triumph Pro ST</CardTitle>
                    </NavLink>
                    <CardPrice>2&nbsp;200&nbsp;₽</CardPrice>
                    <CardPlace>Санкт Петербург</CardPlace>
                    <CardDate>Сегодня в&nbsp;10:45</CardDate>
                </CardInfoContainer>
            </СardsСard>
        </CardsItem>
    );
};

export default CardsItemRender;