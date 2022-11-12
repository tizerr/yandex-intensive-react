import {Book} from "../components/Book";
import styled from 'styled-components';
import {Review} from "../components/Review";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectBookById} from "../store/book/selectors";
import {useEffect} from "react";
import {loadBookIfNotExist} from "../store/book/loadBookIfNotExist";
import {loadReviewsIfNotExist} from "../store/review/loadReviewsIfNotExist";

export const BookPage = () => {
    const {bookId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBookIfNotExist(bookId));
        dispatch(loadReviewsIfNotExist(bookId));
    }, []);

    const book = useSelector((state) => selectBookById(state, bookId));

    if (Object.keys(book).length === 0) return null;

    return (
        <PageContainer>
            <Description>
                <BookDescription bookId={bookId}></BookDescription>
                <AnnotationContainer>
                    <Title>Аннотация</Title>
                    <p>{book.annotation}</p>
                </AnnotationContainer>
            </Description>
            <ReviewsContainer>
                { book.reviews.map((review) => <Review key={review.id} reviewId={review.id}/>) }
            </ReviewsContainer>
        </PageContainer>
    )
}

const PageContainer = styled.div`
  padding: 3.5rem 3rem;
  @media (max-width: 1100px) {
    padding: 2.5rem 1rem;
  }
`

const ReviewsContainer = styled.section`
  margin-top: 2.5rem;
`

const Description = styled.section`
  display: flex;
  justify-content: space-between;
`

const BookDescription = styled(Book)`
  width: 49%;
  margin-bottom: 0;
  align-items: end;
  cursor: default;
`

const Title = styled.h3`
  font-size: 1rem;
  margin-bottom: 1rem;
`

const AnnotationContainer = styled.div`
  width: 49%;
  background-color: white;
  border-radius: .5rem;
  padding: 1rem 1.5rem;
`