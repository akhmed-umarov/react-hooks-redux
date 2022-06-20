import { Component } from 'react';
import './app-filter.css';

// const AppFilter = () =>{
//    return ( 
//       <div className="btn-group">
//          <button 
//             type="button"
//             className="btn btn-danger">
//                Все сотрудники
//          </button>

//          <button 
//             type="button"
//             className="btn btn-outline-danger">
//                На повышение
//          </button>

//          <button 
//             type="button"
//             className="btn btn-outline-danger">
//                Зп больше 1000$
//          </button>
//       </div>
//    )
// }

class AppFilter extends Component{ 
   constructor(props){ 
      super(props)
      this.state = { 
      filter: 'all'
      }
   }



   onUpdateFilter = (e)=>{ 
      const filter = e.target.getAttribute('data-filter');
      this.setState({filter: filter})
      this.props.onUpdateFilter(filter)
   }




   render(){ 
      return (
      <div className="btn-group">
      <button 
         type="button"
         className="btn btn-danger"
         data-filter="all"


         
         onClick={this.onUpdateFilter}
         >
            Все сотрудники
      </button>

      <button 
         type="button"
         className="btn btn-outline-danger"
         data-filter="increase"
         
         onClick={this.onUpdateFilter}

         >
            
            На повышение
      </button>

      <button 
         type="button"
         className="btn btn-outline-danger"
         data-filter="zp"


         onClick={this.onUpdateFilter}
         >
            Зп больше 1000$
      </button>
   </div>
      )
   }
}


export default AppFilter;