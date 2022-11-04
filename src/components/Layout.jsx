import styled from 'styled-components'
import cartImg from '../images/cart.svg';

export const Layout = (props) => {
    return (
        <Container>
            <HeaderContainer>
                <a href="#"><Logo>Магазин</Logo></a>
                <a href="#"><CartImg src={cartImg} alt="1"/></a>
            </HeaderContainer>
            <Main>
                {props.children}
            </Main>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const Main = styled.main`
  flex: 1 1 auto;
  background-color: #E9E9E9;
`
const HeaderContainer = styled.header`
  background-color: black;
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
`

const Logo = styled.h1`
  font-weight: 700;
  font-size: 1.3rem;
  color: white;
`

const CartImg = styled.img`
  height: 100%;
`