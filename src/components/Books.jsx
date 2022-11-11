import {useEffect} from "react";
import styled from 'styled-components';
import {useDispatch, useSelector} from "react-redux";
import {loadBooksIfNotExist} from "../store/book/loadBooksIfNotExist";
import {Book} from "./Book";
import {useParams} from "react-router-dom";
import {selectCategoryById} from "../store/category/selectors";

export const Books = () => {
    const {categoryId} = useParams();

    useEffect(() => {
        dispatch(loadBooksIfNotExist(categoryId));
    }, [categoryId]);

    const dispatch = useDispatch();
    const activeCategory = useSelector(state => selectCategoryById(state, categoryId));

    if (!activeCategory)
        return null;  // important!!!

    const bookIds = activeCategory.books;
    console.log(bookIds)


    return (
        <BooksConatiner>
            {
                bookIds.map((bookId) => <Book key={bookId} bookId={bookId}/>)
            }
        </BooksConatiner>
    )
}

const BooksConatiner = styled.ul`
  width: 80%;
`