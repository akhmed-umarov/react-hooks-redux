import ProductListItem from "../product-list-item/product-list-item"
import "./product-list.css";


const ProductList = ({arrayData , onDelete})=>{ 




   const elements = arrayData.map(el=>{ 



      ///отсюда мы вытащили из объекта отдельно его id а все остальные свойства закинули в другую переменную с помощью рест и спрет
      const {id , ...elProps} = el;
      ///keys должны быть уникальны только среди своих соседей и не более , нет необходимости делать уникальность глобально, keys необходимы тоько в контексте списков для того чтобы было видно что в вертуальном дом дереве поменялось а что нет , пример с массивом в который добавили первым элементом нвоый и пришлось перезаписывать весь массив заного из за того что рне было кейса и поменялось расположение

      ///ключи необходимы для оптимизации скорости работы приложения 
      // благодаря ним реакт обновляет только те элементы которые действительон изменились 
      //в этом ему помогает алгоритм согласования старого и нового дом дерева с помощью витуального дом дерева 
      // для работы со списком отрибутов необходимо работать с keys  для большого ускорения работы вашего приложения

      return (
          <ProductListItem 
          onDelete = {()=>(onDelete(id))}
          key = {id} 
          {...elProps}/>
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