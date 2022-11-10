import {Layout} from "./components/Layout";
import {CatalogPage} from "./pages/CatalogPage";
// import {BookPage} from "./pages/BookPage";
import {categories} from "./constants/mock";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    // const testBook = categories[0].books[0]  // for BookPage
    return (
        <Provider store={store}>
            <Layout>
              <CatalogPage categories={categories}/>
              {/*<BookPage book={testBook}></BookPage>*/}
            </Layout>
        </Provider>
    );
}

export default App;
