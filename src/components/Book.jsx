import styled from "styled-components";
import {Counter} from './Counter';
import {useSelector} from "react-redux";
import {selectBookById} from "../store/book/selectors";

export const Book = ({bookId, className}) => {
    const book = useSelector((state) => selectBookById(state, bookId));

    if (!book) return null;

    return (
        <BookContainer className={className}>
            <div>
                <Title>{book.name}</Title>
                <div>
                    <Info>{book.authors.join(', ')}</Info>
                    <Info>{book.subgenre}</Info>
                    <Info>рейтинг: {book.rating}</Info>
                    <Price>{book.price} ₽</Price>
                </div>
            </div>
            <Counter bookId={bookId}/>
        </BookContainer>
    )
}

const BookContainer = styled.li`
  background-color: white;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  :last-child {
    margin-bottom: 0;
  }
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
`

const Info = styled.div`
  color: rgb(0, 0, 0, 0.5);
  margin-bottom: 0.5rem;
`

const Price = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  margin-top: 1.2rem;
`