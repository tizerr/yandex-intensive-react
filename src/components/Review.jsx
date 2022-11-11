import styled from "styled-components";
import {useSelector} from "react-redux";
import {selectReviewById} from "../store/review/selectors";

export const Review = ({reviewId}) => {

    const review = useSelector((state) => selectReviewById(state, reviewId))
    console.log(review)

    if (!review) return null;

    return <ReviewContainer>
        <Title>
            <Author>{review.user.name}</Author>
            <Rating>{review.rating}</Rating>
        </Title>
        <p>{review.text}</p>
    </ReviewContainer>
}

const ReviewContainer = styled.li`
  background-color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  :last-child {
    margin-bottom: 0;
  }
  list-style-type: none;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
`

const Author = styled.h3`
  font-size: 1rem;
`

const Rating = styled.h3`
  color: rgb(0, 0, 0, 0.5);
`