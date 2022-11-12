import styled from 'styled-components';
import {useSelector} from "react-redux";
import {selectBookById} from "../store/book/selectors";

export const Price = ({bookId, count}) => {
    const book = useSelector(state => selectBookById(state, bookId))

    return (
        <PriceContainer>
            <div>{book.name}</div>
            <Count>{book.price * count}&nbsp;₽</Count>
        </PriceContainer>
    )
}

const PriceContainer = styled.div`
  font-size: 1.1rem;
  margin-bottom: .5rem;
  display: flex;
  justify-content: space-between;
`

const Count = styled.div`
  font-weight: 700;
`