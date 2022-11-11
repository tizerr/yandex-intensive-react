import styled from 'styled-components';
import {useSelector} from "react-redux";
import {Books} from "../components/Books";
import {selectCartModule} from "../store/cart/selectors";
import {Price} from "../components/Price";




export const CartPage = () => {

    const books = useSelector((state) => selectCartModule(state)) || [];
    // console.log(books)
    // console.log(Object.entries(books))

    if (!books) return null;

    const booksIds = [];
    for (const [id, cnt] of Object.entries(books)) {
        console.log(id, cnt)
        if (cnt > 0) booksIds.push(id);
    }
    console.log(booksIds)

    return (
        <PageContainer>
            <Cart>
                <section>
                    <Title>Ваш заказ:</Title>
                    {
                        booksIds.map((id) => <Price bookId={id} count={books[id]}/>)
                    }
                </section>
                <Buy>
                    <Sum>Итого: {}</Sum>
                </Buy>
            </Cart>
            <CustomBooks booksIds={booksIds}/>
        </PageContainer>
    )
}

const Title = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`


const Sum = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const Buy = styled.section`
  display: flex;
  justify-content: space-between;
`

const PageContainer = styled.div`
  padding: 3.5rem 3rem;
  @media (max-width: 1100px) {
    padding: 2.5rem 1rem;
  }
  display: flex;
  justify-content: space-between;
`

const Cart = styled.div`
  width: 28%;
  background-color: white;
  border-radius: .5rem;
  padding: 1rem 1.5rem;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
`

const CustomBooks = styled(Books)`
  width: 71%;
`
