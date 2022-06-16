import ProductListItem from "../product-list-item/product-list-item"
import "./product-list.css";


const ProductList = ({arrayData})=>{ 




   const elements = arrayData.map(el=>{ 
      return (
          <ProductListItem {...el}/>
      )
   })

   

   // const elements = arrayData.map(el=> <ProductListItem {...el}/>)
   return ( 
      <ul className="app-list list-group">
         {elements}
         {/* <ProductListItem name = "Akhmed" salary={800}/>
         <ProductListItem name = "Ilyas" salary={1000}/>
         <ProductListItem name = "Amina" salary={3000}/> */}
      </ul>
   )
}


export default ProductList