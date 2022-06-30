import React, { Component } from "react";
import  ReactDOM  from "react-dom";


class TestRef extends Component{ 

   state = { 
      ArrTest: [{name: `Akhmed` , age: 25} , {name: `Ilyas` , age: 20}]
   }
   
   ArrayRefs = [];

   CreateMyRef = (elem)=>{ 
   this.ArrayRefs.push(elem)
   }

   onFocus = (el)=>{ 
   if (el.target.getAttribute('data-taggle')==="0"){ 
      console.log(`Nothing`);
      return
   }
   this.ArrayRefs[1].focus()

   }


   render() { 

      const {ArrTest} = this.state;

      const listTest = ArrTest.map(({name , age} , index)=>{
         return (
         <div key={index}>
         <p onClick={this.onFocus} data-taggle={index}>My name {name} , my old {age} </p>
         <input type="text" style={index ? null : {display: `none`}} ref={this.CreateMyRef} />
         </div>
         )
      })
      return (
      <div>
         {listTest}
         <TestPortal>
            <p>Hello world!</p>
         </TestPortal>
      </div>
      )
   }
}

const TestPortal =(props)=>{ 

   const parentNode = document.createElement('div')
   document.body.appendChild(parentNode);

   return ReactDOM.createPortal(props.children, parentNode )

}



export default TestRef