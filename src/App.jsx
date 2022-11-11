import {Layout} from "./components/Layout";
import {Books} from "./components/Books";
import {CatalogPage} from "./pages/CatalogPage";
import {BookPage} from "./pages/BookPage";
import {Provider} from "react-redux";
import {store} from "./store";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<CatalogPage/>}>
                            <Route path='/categories/:categoryId' element={<Books/>}></Route>
                        </Route>
                        <Route element={<BookPage/>}></Route>
                    </Routes>
                </Layout>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
