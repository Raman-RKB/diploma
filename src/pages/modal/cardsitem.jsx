/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

import {
    CardsCard,
    CardImageContainer,
    CardTitle,
    CardPrice,
    CardPlace,
    CardDate,
    CardsItem,
    CardImage,
    CardContainer
} from './style/cardsItemStyle';

const Cardsitem = ({ id, title, price, place, date, article, picture }) => {

    return (
        <CardsItem>
            <CardsCard>
                <NavLink to={article ? `/myadvpage` : `/product/${id}`} replace>
                    <CardImageContainer>
                        <CardImage src={picture} alt="picture" />
                    </CardImageContainer>
                </NavLink>
                <CardContainer>
                    <NavLink to={article ? `/myadvpage` : `/product/${id}`} replace>
                        <CardTitle>{title}</CardTitle>
                    </NavLink>
                    <CardPrice>{price}</CardPrice>
                    <CardPlace>{place}</CardPlace>
                    <CardDate>{date}</CardDate>
                </CardContainer>
            </CardsCard>
        </CardsItem>
    );
};

export default Cardsitem;