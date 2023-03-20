/* eslint-disable react/prop-types */
// import Logo from '../img/logo.png';
// import LogoMob from '../img/logo-mob.png';

import {
    CardsCard,
    CardImage,
    CardTitle,
    CardPrice,
    CardPlace,
    CardDate
} from '../css/mainNotRegStyle';

const MainNotReg = ({ title, price, place, date }) => {

    return (
        <CardsCard>
            <CardImage>
                <a href="#" target="_blank">
                    <img src="#" alt="picture" />
                </a>
            </CardImage>
            <div>
                <a href="" target="_blank">
                    <CardTitle>{title}</CardTitle>
                </a>
                <CardPrice>{price}</CardPrice>
                <CardPlace>{place}</CardPlace>
                <CardDate>{date}</CardDate>
            </div>


        </CardsCard>
    );
};

export default MainNotReg;