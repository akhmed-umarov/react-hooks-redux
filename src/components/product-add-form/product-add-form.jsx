import { Component } from 'react';
// import './product-add-form.css';
import './product-add-form.scss';


///для того чтобы работать в реакте с sacc модулями нам надо установить пакет npm i sacc --save


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

static onLog = () =>{ 
    console.log(`Static method your can use for name some class`);
}


static logger = 'on';

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
            //   onKeyUp={(e)=>(e.target.value=e.target.value.replace(/[^\d]/,''))}
              onChange = {this.changeValue}
              className="form-control new-post-label"
              onKeyUp={(e)=>(e.target.value=e.target.value.replace(/\d/,''))}
              placeholder="Как его зовут?" />
          <input type="text"
              name='salary'
              onKeyUp={(e)=>(e.target.value=e.target.value.replace(/\D/,''))}              value={salary}
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

ProductAddForm.onLog();
console.log(ProductAddForm.logger);

export default ProductAddForm


