import {Layout} from "./components/Layout";
import {CatalogPage} from "./pages/CatalogPage";
import {BookPage} from "./pages/BookPage";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartPage} from "./pages/CartPage";
import {CategoryBooks} from "./components/CategoryBooks";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<CatalogPage/>}>
                            <Route path='/categories/:categoryId' element={<CategoryBooks/>}></Route>
                        </Route>
                        <Route path='/books/:bookId' element={<BookPage/>}></Route>
                        <Route path='/cart' element={<CartPage/>}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
