import {useEffect, } from "react";
import styled from 'styled-components';
import {selectCategories} from "../store/category/selectors";
import {useDispatch, useSelector} from "react-redux";
import {loadCategoriesIfNotExist} from "../store/category/loadCategoriesIfNotExist";
import {Navigate, NavLink, Outlet, useParams} from "react-router-dom";

export const CatalogPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    console.log(params, Object.keys(params).length === 0)

    useEffect(() => {
        dispatch(loadCategoriesIfNotExist);
    }, []);

    const categories = useSelector(state => selectCategories(state));


    if (categories.length === 0) return null;
    if (Object.keys(params).length === 0) {
        return <Navigate to={`/categories/${categories[0].id}`}></Navigate>
    }

    return (
        <PageContainer>
            <Categories>
                {
                    categories.map((category) => <Li key={category.id}><CustomNavLink className={({isActive}) => (isActive ? 'active' : '')} to={`/categories/${category.id}`}>{category.name}</CustomNavLink></Li>)
                }
            </Categories>
            <Outlet/>
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

const CustomNavLink = styled(NavLink)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: inherit;
  width: 100%;
  color: black;
  &.active {
    font-weight: 700;
  }
`
