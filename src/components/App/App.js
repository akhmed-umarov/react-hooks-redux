import { Component } from "react";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import ProductList from "../product-list/product-list";
import "./app.css";
import ProductAddForm from "../product-add-form/product-add-form";







class App extends Component { 
constructor(props){ 
   super(props)
   this.state = { 
      data: [
         {name: "Akhmed" , salary: 1000 , increase: true , id: 1},
         {name: "Ilyas" , salary: 2000 , increase: false, id: 2},
         {name: "Amina" , salary: 3000 , increase: false, id: 3}
      ]
   };
  

}



deleteItem = (id)=>{ 
   this.setState(({data})=>{

      return { 
         data:  data.filter(el=> el.id!=id)
      }
   })
}

PostItem = (post)=>{ 

   console.log(post);
   this.setState(({data})=>{
   let newPost = post;
   let newData = [...data , newPost]
      return { 
         data:  newData
      }
   })
}

// postItem = (event)=>{ 
//    let newItem = {
//       // name: event.target.state.name,
//       // salary: event.target.state.salary 
//       name: state.name,
//       salary: state.salary,
//       id: this.state.id
//    }
//    // event.preventDefault();
//    // console.log(event.target.value);
//    this.setState(({data , id})=>{
//       let newData = [...data , newItem];
//       return { 
//          id: id+1,
//          data: newData
//       }
//    })
// }

render() {
   return ( 
      <div className="app">
         <AppInfo/>

         <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
         </div> 

      <ProductList
      onDelete = {this.deleteItem}
      arrayData = {this.state.data}/>

      <ProductAddForm
      postItem = {this.PostItem} 
      />
      </div>
   );
}
}

export default App