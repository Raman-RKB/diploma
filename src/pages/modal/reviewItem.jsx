// import { NavLink } from "react-router-dom";

import {

    ReviewsReview,
    ReviewItem,
    ReviewLeft,
    ReviewImgContainer,
    ReviewImg,
    ReviewRight,
    ReviewNameSpan,
    ReviewTitle,
    ReviewText,
    ReviewName
} from './style/reviewStyle';

const ReviewItems = () => {

    return (
        <ReviewsReview>
            <ReviewItem>
                <ReviewLeft>
                    <ReviewImgContainer>
                        <ReviewImg />
                    </ReviewImgContainer>
                </ReviewLeft>
                <ReviewRight>
                    <ReviewName>Олег<ReviewNameSpan>14 августа</ReviewNameSpan></ReviewName>
                    <ReviewTitle>Комментарий</ReviewTitle>
                    <ReviewText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore tempore suscipit nostrum minus a sit commodi, distinctio veniam. Voluptates, tempore. Est officiis explicabo quas sed reprehenderit aliquam cumque vel? Iste.</ReviewText>
                </ReviewRight>
            </ReviewItem>
        </ReviewsReview>
    );
};

export default ReviewItems;