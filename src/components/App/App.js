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
         {name: "Akhmed" , salary: 1000 , increase: true , likeStar: false, id: 1},
         {name: "Ilyas" , salary: 2000 , increase: false, likeStar: false,id: 2},
         {name: "Amina" , salary: 3000 , increase: false, likeStar: false, id: 3}
      ], 
      term : '', 


      filter: 'all'


   };
   this.maxId = 4;

   // this.dataLength = this.state.data.length;
  

}



OnIncrease = (id) =>{ 
   this.setState(({data})=>{ 
      let newData = data.map(el=>{ 
         if (el.id === id){ 
            return {...el , increase: !el.increase}
         }
         return el
      })
   return { 
      data:  newData
   }
   })
}

OnLikeStar = (id)=>{ 
   this.setState(({data})=>{ 
      let newData = data.map(el=>{ 
         if (el.id === id){ 
            return { ...el , likeStar: !el.likeStar}
         }
         return el
      })
      return { 
         data: newData
      }
   })
}

OnChange = (id , prop) =>{ 
   this.setState(({data})=>{ 
      let newData = data.map(el=>{ 
         if (el.id === id){ 
            return {...el , [prop]: !el[prop]}
         }
         return el
      })
   return { 
      data:  newData
   }
   })
}

deleteItem = (id)=>{ 
   this.setState(({data})=>{
      return { 
         data:  data.filter(el=> el.id!==id)
      }
   })
}

addItem =(name , salary)=>{ 

   let newPerson = { 
      name: name, 
      salary: salary,
      increase: false,
      likeStar: false,
      id: this.maxId++
   }
if (name.length > 4 && salary.length > 1) { 
   this.setState(({data})=>({ 
      data: [...data , newPerson]
   }))
}
}

// infoItem =()=>{ 
//    let btn = document.querySelectorAll('button');
//    btn.forEach(el=>{ 
//       el.addEventListener('click' , ()=>{ 
//          console.log(`object`);
//       })
//    })
//    return this.state.data.length
// }




searchEmp = (items , term)=>{ 
   if (term.length === 0 ){ 
      return items
   }

   return items.filter(item =>{
      return item.name.indexOf(term) > -1
   })
}


onUpdateSearch = (term)=>{ 
   this.setState({term : term})
}

onUpdateFilter = (filter)=>{ 
   this.setState({filter: filter})
}




filterData = (data, filter)=>{ 
let filterArray = data
switch (filter){
   case 'increase':
      filterArray = filterArray.filter(el=> {
         return el.increase===true
      })
      break
   case 'zp': 
      filterArray = filterArray.filter(el=> {
         return el.salary >=1000
      })
      break
   default: 
   return filterArray
}

return filterArray
}






render() {


const { data, term , filter} = this.state

const infoItem = this.state.data.length;

const increased = this.state.data.filter(el=>{ 
  return  (el.increase === true)
}).length

const visableData = this.searchEmp(data, term);

const filterVisableData = this.filterData(visableData , filter)

 
   return ( 
      <div className="app">
         {/* <AppInfo infoItem = {this.infoItem}/> */}
         <AppInfo 
         infoItem = {infoItem}
         increased = {increased} />
         <div className="search-panel">
            <SearchPanel
            onUpdateSearch = {this.onUpdateSearch}
            term = {term}
            />
            <AppFilter
            onUpdateFilter = {this.onUpdateFilter}
            filter = {filter}
            />
         </div> 

      <ProductList
      OnChange = {this.OnChange}
      OnLikeStar = {this.OnLikeStar}
      OnIncrease = {this.OnIncrease}
      onDelete = {this.deleteItem}
      // arrayData = {visableData}


      arrayData = {filterVisableData}

      
      // OnFilter = {OnFilter}

      />
      {/* arrayData = {data}/> */}

      <ProductAddForm
      onAdd={this.addItem}
      />
      </div>
   );
}
}

export default App