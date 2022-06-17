// import { Component } from 'react';
import './app-info.css';      ///можем так закидывать благодаря webpack он все будет закидывать в один конечный файл стилей


// const AppInfo = function ({}) { 

// class AppInfo extends Component { 
//    constructor(props){ 
//       super(props); 
//       // this.state = { 
//       //    length: this.props.infoItem()
//       // }

//    }

 const AppInfo = (props)=>{ 

   // GiveInfo = ()=>{ 
   // console.log(`objectasd`);
   // // this.setState(()=>({
   // //    length: this.props.infoItem()
   // // }))
   // }
   
   // render(){ 

   
   // let {infoItem} = this.props

   let {infoItem , increased} = props

      return (
         <div className="app-info">
            <h1>Добавление в магазин товара </h1>
            <h2>Общее число товара в магазине: {infoItem} </h2>
            <h2>Премию получат: {increased}</h2>
   
         </div>
      )
   // }
}
 





// }


export default AppInfo