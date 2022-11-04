import {Layout} from "./components/Layout";
// import {CatalogPage} from "./pages/CatalogPage";
import {BookPage} from "./pages/BookPage";
import {categories} from "./constants/mock";

function App() {
    const testBook = categories[0].books[0]
    return (
      <Layout>
          {/*<CatalogPage categories={categories}/>*/}
          <BookPage book={testBook}></BookPage>
      </Layout>
    );
}

export default App;
