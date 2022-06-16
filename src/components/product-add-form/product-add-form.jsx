import { Component } from 'react';
import './product-add-form.css';



class ProductAddForm extends Component { 
constructor (props) { 
    super(props);
    this.state = { 
        name: '' , 
        salary: ""
    }
}
onValueChange =(e)=>{ 
    // console.log(e.target.name);      интересная конструкция
    this.setState({
        //то есть мы тут заменим e.target.name на name в случае если e.target.name = name и на salary если равен salary 
        //то есть мы можем использовать такую запись если мы хотим поменять какие то атрибуты элементов но мы точно не знаем какой именно у нас будет там атрибут
        [e.target.name]: e.target.value
    })
}




render() { 

  


   let {name , salary} = this.state ;

   return (
      <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form
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
      </form>
  </div>
   )
}} 

export default ProductAddForm