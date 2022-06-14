import './app-filter.css';

const AppFilter = () =>{ 
   return ( 
      <div className="btn-group">
         <button 
            type="button"
            className="btn btn-danger">
               Все сотрудники
         </button>

         <button 
            type="button"
            className="btn btn-outline-danger">
               На повышение
         </button>

         <button 
            type="button"
            className="btn btn-outline-danger">
               Зп больше 1000$
         </button>
      </div>
   )
}


export default AppFilter;