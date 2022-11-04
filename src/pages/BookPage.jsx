import {Book} from "../components/Book";
// import {Reviews} from "../components/Reviews";
import styled from 'styled-components';

export const BookPage = ({book}) => {
    return (
        <PageContainer>
            <Description>
                <BookDescription book={book}></BookDescription>
                <AnnotationContainer>
                    <Title>Аннотация</Title>
                    <p>{book.annotation}</p>
                </AnnotationContainer>
            </Description>
            {/*<Reviews/>*/}
        </PageContainer>
    )
}

const PageContainer = styled.div`
  padding: 3.5rem 3rem;
  @media (max-width: 1100px) {
    padding: 2.5rem 1rem;
  }
`

const Description = styled.section`
  display: flex;
  justify-content: space-between;
`

const BookDescription = styled(Book)`
  width: 49%;
  margin-bottom: 0;
  align-items: end;
`

const Title = styled.h3`
  font-size: 1rem;
`

const AnnotationContainer = styled.div`
  width: 49%;
  background-color: white;
  border-radius: .5rem;
  padding: 1rem 1.5rem;
`