import ProductListItem from "../product-list-item/product-list-item"
import "./product-list.css";


const ProductList = ({arrayData , onDelete , OnIncrease , OnLikeStar})=>{ 

   


   const elements = arrayData.map(el=>{ 

      const {id , ...elProps} = el;
    

      return (
          <ProductListItem 
          onDelete = {()=>(onDelete(id))}
          OnLikeStar = {()=>(OnLikeStar(id))}
          OnIncrease = {()=>(OnIncrease(id))}
          key = {id} 
          {...elProps}/>
      )
   })


   return ( 
      <ul className="app-list list-group">
         {elements}
       
      </ul>
   )
}


export default ProductList