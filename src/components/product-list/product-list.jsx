import ProductListItem from "../product-list-item/product-list-item"
import "./product-list.css";


const ProductList = ()=>{ 
   return ( 
      <ul className="app-list list-group">
         <ProductListItem/>
         <ProductListItem/>
         <ProductListItem/>
      </ul>
   )
}


export default ProductList