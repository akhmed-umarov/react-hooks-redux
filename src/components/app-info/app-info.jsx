import './app-info.css';      ///можем так закидывать благодаря webpack он все будет закидывать в один конечный файл стилей


const AppInfo = function () { 
   return (
      <div className="app-info">
         <h1>Добавление в магазин товара </h1>
         <h2>Общее число товара в магазине: </h2>
         <h2>Премию получат: </h2>

      </div>
   )
}


export default AppInfo