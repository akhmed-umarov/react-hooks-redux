import './product-list-item.css';



const ProductListItem = (props)=> {




   const {name , salary , onDelete , increase , likeStar , OnIncrease , OnLikeStar} = props;


   



   let classLi = "list-group-item d-flex justify-content-between ";
   if (increase) {
      classLi += " increase"
   }
   if (likeStar) { 
      classLi += " like"
   }

      return ( 
         <li className={classLi}>
            <span
            onClick={OnLikeStar}
             className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                 <button type="button"
                        onClick={OnIncrease}
                       className="btn-cookie btn-sm ">
                       <i className="fas fa-cookie"></i>
                 </button>
   
                  <button type="button"
                        onClick={onDelete}
                          className="btn-trash btn-sm ">
                      <i className="fas fa-trash"></i>
                 </button>
                 <i className="fas fa-star"></i>
              </div>
          </li>
      )
}
   










export default ProductListItem






// const ProductListItem = ({name , salary , increase}) =>{ 

   

//    const increaseFun = ()=>{ 
      
//       if (increase){ 
//       return "list-group-item d-flex justify-content-between  increase"
//       } else {
//          return "list-group-item d-flex justify-content-between "
//       }
//    }

//    return ( 
//       <li className={increaseFun()}>
//          <span className="list-group-item-label">{name}</span>
//          <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
//          <div className='d-flex justify-content-center align-items-center'>
//               <button type="button"
//                     className="btn-cookie btn-sm ">
//                     <i className="fas fa-cookie"></i>
//               </button>

//                <button type="button"
//                        className="btn-trash btn-sm ">
//                    <i className="fas fa-trash"></i>
//               </button>
//               <i className="fas fa-star"></i>
//            </div>
//        </li>
//    )
// }
