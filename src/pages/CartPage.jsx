import styled from 'styled-components';
import {useSelector} from "react-redux";
import {Books} from "../components/Books";
import {selectCartModule} from "../store/cart/selectors";
import {Price} from "../components/Price";
import {selectBooks} from "../store/book/selectors";

export const CartPage = () => {

    const books = useSelector((state) => selectCartModule(state)) || [];
    console.log(books)

    const allBooks = useSelector(state => selectBooks(state));
    console.log(allBooks)

    if (!books) return null;
    if (!allBooks) return null;

    const booksIds = [];
    for (const [id, cnt] of Object.entries(books)) {
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
                    <Sum>
                        <Total>Итого:</Total>
                        {
                            booksIds.map((id) => {
                                const book = allBooks.find((b) => b.id === id);
                                return book.price * books[id];
                            }).reduce((sum, a) => sum + a, 0)
                        } ₽
                    </Sum>
                    <Btn>Купить</Btn>
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

const Total = styled.span`
  margin-right: 1.1rem;
`

const Btn = styled.button`
  background-color: black;
  color: white;
  border-radius: 0.5rem;
  font-size: 1rem;
  padding: 0.1rem 0.5rem;
  cursor: pointer;
`


const Sum = styled.h2`
  font-size: 1.5rem;
  vertical-align: center;
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
  padding: 1rem 1.2rem;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const CustomBooks = styled(Books)`
  width: 71%;
`
