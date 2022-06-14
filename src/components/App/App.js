import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import ProductList from "../product-list/product-list";

import "./app.css";
import ProductAddForm from "../product-add-form/product-add-form";

function App () { 
   return ( 
      <div className="app">
         <AppInfo/>

         <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
         </div>

      <ProductList/>

      <ProductAddForm />
      </div>
   );
}


export default App