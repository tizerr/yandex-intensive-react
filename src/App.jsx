import {Layout} from "./components/Layout";
import {CatalogPage} from "./pages/CatalogPage";
import {categories} from "./constants/mock";

function App() {
  return (
      <Layout>
          <CatalogPage categories={categories}/>
      </Layout>
  );
}

export default App;
