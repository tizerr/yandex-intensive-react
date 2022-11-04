import {useState} from "react";
import styled from 'styled-components';
import {Book} from "../components/Book";

export const CatalogPage = (props) => {
    const [activeCategory, setActiveCategory] = useState(props.categories[0]);

    return (
        <PageContainer>
            <Categories>
                {
                    props.categories.map((category) => <Li key={category.id}><Button active={category === activeCategory} onClick={() => setActiveCategory(category)}>{category.name}</Button></Li>)
                }
            </Categories>
            <Books>
                {
                    activeCategory.books.map((book) => <Book key={book.id} book={book}/>)
                }
            </Books>
        </PageContainer>
    )
}

const PageContainer = styled.div`
  padding: 3.5rem 3rem;
  @media (max-width: 1100px) {
    padding: 2.5rem 1rem;
  }
  display: flex;
  justify-content: space-between;
`

const Li = styled.li`
  list-style-type: none;
  :not(:last-child) {
    margin-bottom: 1.2rem;
  }
`

const Categories = styled.ul`
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 18.5%;
  height: 70vh;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: inherit;
  width: 100%;
  font-weight: ${props => props.active ? '700' : 'default'};
`

const Books = styled.ul`
  width: 80%;
`