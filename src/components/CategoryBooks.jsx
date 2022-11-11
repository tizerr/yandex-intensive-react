import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {loadBooksIfNotExist} from "../store/book/loadBooksIfNotExist";
import {selectCategoryById} from "../store/category/selectors";
import {Books} from "./Books";
import styled from "styled-components";

export const CategoryBooks = () => {
    const dispatch = useDispatch();
    const {categoryId} = useParams();

    useEffect(() => {
        dispatch(loadBooksIfNotExist(categoryId));
    }, [categoryId]);

    const activeCategory = useSelector(state => selectCategoryById(state, categoryId));

    if (!activeCategory)
        return null;  // important!!!

    const bookIds = activeCategory.books;
    console.log(bookIds)

    return (
        <CustomBooks booksIds={bookIds}/>
    )
}

const CustomBooks = styled(Books)`
  width: 80%;
`