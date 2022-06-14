import './product-add-form.css';


const ProductAddForm =()=>{ 
   return (
      <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form
          className="add-form d-flex">
          <input type="text"
              className="form-control new-post-label"
              placeholder="Как его зовут?" />
          <input type="number"
              className="form-control new-post-label"
              placeholder="З/П в $?" />

          <button type="submit"
                  className="btn btn-outline-danger">Добавить</button>
      </form>
  </div>
   )
}

export default ProductAddForm