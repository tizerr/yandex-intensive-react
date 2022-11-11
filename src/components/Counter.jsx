import styled from "styled-components";
import plusImg from '../images/plus.svg'
import minusImg from '../images/minus.svg'
import {useDispatch, useSelector} from "react-redux";
import {selectBookCount} from "../store/cart/selectors";
import {cartSlice} from "../store/cart";

export const Counter = ({bookId}) => {
    const dispatch = useDispatch();
    const count = useSelector((state) => selectBookCount(state, bookId));

    return (
        <CounterContainer>
            <CounterButton onClick={() => dispatch(cartSlice.actions.removeBook(bookId))} disabled={!count}><CounterImg src={minusImg} alt=""/></CounterButton>
            <CounterValue>{ count || 0 }</CounterValue>
            <CounterButton onClick={() => dispatch(cartSlice.actions.addBook(bookId))} disabled={count === 6}><CounterImg src={plusImg} alt=""/></CounterButton>
        </CounterContainer>
    )
}

const CounterButton = styled.button`
  background-color: black;
  border: 0;
  padding: 0.6rem;
  color: white;
  border-radius: .5rem;
  height: 2.3rem;
  width: 2.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  :disabled {
    background-color: rgb(0, 0, 0, 0.5);
  }
`

const CounterValue = styled.h3`
  margin: 0 1rem;
  font-size: 1.5rem;
`

const CounterContainer = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
`

const CounterImg = styled.img`
  width: 100%;
`