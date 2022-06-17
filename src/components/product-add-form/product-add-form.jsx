import { Component } from 'react';
import './product-add-form.css';



class ProductAddForm extends Component { 
// constructor (props) { 
//     super(props);
//     this.state = { 
//         name: '' , 
//         salary: ""
//     }
// }
// onValueChange =(e)=>{ 
//     // console.log(e.target.name);      интересная конструкция
//     this.setState({
//         //то есть мы тут заменим e.target.name на name в случае если e.target.name = name и на salary если равен salary 
//         //то есть мы можем использовать такую запись если мы хотим поменять какие то атрибуты элементов но мы точно не знаем какой именно у нас будет там атрибут
//         [e.target.name]: e.target.value
//     })
// }




constructor (props) { 
    super(props); 
    this.state = { 
        name: "",
        salary: "",
        id: 4
    }
}


changeValue = (e) =>{ 
this.setState({ 
    [e.target.name]: e.target.value
})
}




render() { 

// let {onPost} = this.props
let {name, salary , id} = this.state
let { postItem } = this.props
// let {postItem} = this.props


let FinalPostItem = ()=>{ 

this.state.id = this.state.id + 1;

return postItem({
    name: name, 
    salary: salary,
    id: id 
})

}




// let newOnPost = (e)=>{ 
// let NewPost = { 
//     name: e.target.name,
//     salary: e.target.salary
// }
// onPost(NewPost)
// }


   return (
      <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form
      className="add-form d-flex">
          <input type="text"
              name= "name"
              value={name}
              onChange = {this.changeValue}
              className="form-control new-post-label"
              placeholder="Как его зовут?" />
          <input type="number"
              name='salary'
              value={salary}
              onChange = {this.changeValue}
              className="form-control new-post-label"
              placeholder="З/П в $?" />

          <button 
          type="button"
        //   onClick={()=>{postItem()}}
        onClick={FinalPostItem}
          className="btn btn-outline-danger">Добавить</button>
      </form>
  </div>
   )
}} 

export default ProductAddForm




{/* <form
className="add-form d-flex">
    <input type="text"
        name='name'
        value={name}
        onChange={this.onValueChange}
        className="form-control new-post-label"
        placeholder="Как его зовут?" />
    <input type="number"
        name='salary'
        value={salary}
        onChange={this.onValueChange}
        className="form-control new-post-label"
        placeholder="З/П в $?" />

    <button type="submit"
            className="btn btn-outline-danger">Добавить</button>
</form> */}