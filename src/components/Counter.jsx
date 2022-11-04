import styled from "styled-components";
import plusImg from '../images/plus.svg'
import minusImg from '../images/minus.svg'
import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <CounterContainer>
            <CounterButton onClick={() => setCount(count - 1)} disabled={count === 0}><CounterImg src={minusImg} alt=""/></CounterButton>
            <CounterValue>{ count }</CounterValue>
            <CounterButton onClick={() => setCount(count + 1)} disabled={count === 6}><CounterImg src={plusImg} alt=""/></CounterButton>
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