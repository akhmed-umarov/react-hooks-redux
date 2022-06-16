import { Component } from 'react';
import './product-list-item.css';

class ProductListItem extends Component { 
   constructor (props){ 
      super(props); 
      // лучше тут не добавлять все в state так как тогда все время  сюда буду гонять лишние данные 
      this.state = {
         // name: this.props.name, 
         // salary: this.props.salary, 
         increase: this.props.increase,
         likeStar: false
      }
      ///нет разницы где писать методы внутри конструктора или вне его , если методы указываются не через конструктор тогда нет необходимости указывать this
      this.onIncrease = () =>{ 
         this.setState(({increase})=>({
           increase : !increase
         }))
        }
   }

   // onIncrease = () =>{ 
   //  this.setState(({increase})=>({
   //    increase : !increase
   //  }))
   // }
   
   onStar = () =>{ 
      this.setState(({likeStar})=> ({ 
         likeStar: !likeStar
      }))
   }

 
   render() { 

   const {name , salary } = this.props;
   const {increase , likeStar} = this.state;

   
   // let increaseFun = ()=>{ 
   // if (increase){ 
   // return "list-group-item d-flex justify-content-between  increase"
   // } else {
   // return "list-group-item d-flex justify-content-between " 
   // }
   // }
   
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
            onClick={this.onStar}
             className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + "$"}/>
            <div className='d-flex justify-content-center align-items-center'>
                 <button type="button"
                        onClick={this.onIncrease}
                       className="btn-cookie btn-sm ">
                       <i className="fas fa-cookie"></i>
                 </button>
   
                  <button type="button"
                          className="btn-trash btn-sm ">
                      <i className="fas fa-trash"></i>
                 </button>
                 <i className="fas fa-star"></i>
              </div>
          </li>
      )


   }






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
