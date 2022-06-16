import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import ProductList from "../product-list/product-list";
import "./app.css";
import ProductAddForm from "../product-add-form/product-add-form";


const data = [
   {name: "Akhmed" , salary: 1000 , increase: true},
   {name: "Ilyas" , salary: 2000 , increase: false},
   {name: "Amina" , salary: 3000 , increase: false}
]



function App () { 
   return ( 
      <div className="app">
         <AppInfo/>

         <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
         </div>

      <ProductList arrayData = {data}/>

      <ProductAddForm />
      </div>
   );
}


export default App