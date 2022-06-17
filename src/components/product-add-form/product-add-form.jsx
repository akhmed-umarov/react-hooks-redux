import { Component } from 'react';
import './product-add-form.css';



class ProductAddForm extends Component { 

constructor (props) { 
    super(props); 
    this.state = { 
        name: "",
        salary: "",
    }
}

changeValue = (e) =>{ 
this.setState({ 
    [e.target.name]: e.target.value
})
}

onSubmit = (e)=>{ 
    e.preventDefault(); 
    this.props.onAdd(this.state.name , this.state.salary);
    this.setState({ 
        name: '',
        salary: ''
    })
}

render() { 

let {name, salary } = this.state

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
          type="submit"
          onClick={this.onSubmit}
          className="btn btn-outline-danger">Добавить</button>
      </form>
  </div>
   )
}} 

export default ProductAddForm