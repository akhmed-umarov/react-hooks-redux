import { Component } from "react";
import "./search-panel.css";

// const SearchPanel = ()=>{ 
   // return ( 
   //    <input 
   //    type="text" 
   //    className="form-control search-input"
   //    placeholder="Найти сотрудника"
   //    />
   // )
// }


class SearchPanel extends Component{ 
   constructor (props) {
   super(props);
   this.state = {
   term: ""
   }
   }


   onUpdateSearch = (e)=>{
   const term = e.target.value;
   this.setState({term});
   this.props.onUpdateSearch(term)
   }

   render(){ 
      // const {onUpdateSearch} = this.props
      const {term} = this.state
      return ( 
      <input 
      type="text" 
      value={term}
      onChange = {this.onUpdateSearch}
      className="form-control search-input"
      placeholder="Найти сотрудника"
      />
   ) 
   }
}

export default SearchPanel;