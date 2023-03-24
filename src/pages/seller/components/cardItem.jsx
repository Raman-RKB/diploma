/* eslint-disable react/prop-types */
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

const CardsItemRender = ({ id, title, price, place, date, picture }) => {

    return (
        <CardsItem>
            <СardsСard>
                <CardImageContainer>
                    {id && (
                        <NavLink to={`/product/${id}`} replace>
                            <CardImage src={picture} />
                        </NavLink>
                    )}
                </CardImageContainer>
                <CardInfoContainer>
                    {id && (
                        <NavLink to={`/product${id}`} replace>
                            <CardTitle>{title}</CardTitle>
                        </NavLink>
                    )}
                    {price && <CardPrice>{price}</CardPrice>}
                    {place && <CardPlace>{place}</CardPlace>}
                    {date && <CardDate>Размещено {date}</CardDate>}
                </CardInfoContainer>
            </СardsСard>
        </CardsItem>
    );
};

export default CardsItemRender;