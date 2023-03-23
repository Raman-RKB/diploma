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
} from '../main/style/mainNotRegStyle';

const Cardsitem = ({ title, price, place, date, article }) => {

    return (
        <CardsItem>
            <CardsCard>
                <NavLink to={article ? `/myadvpage` : `/product`} replace>
                    <CardImageContainer>
                        <CardImage src="#" alt="picture" />
                    </CardImageContainer>
                </NavLink>
                <CardContainer>
                    <NavLink to={article ? `/myadvpage` : `/product`} replace>
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