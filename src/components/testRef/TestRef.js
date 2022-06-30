import React, { Component } from "react";
import  ReactDOM  from "react-dom";
import PropType from "prop-types";
import styled from "styled-components";



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
         const TestPortal = styled.div`
         width: 200px;
         height: 200px;
         display: flex;
         align-items: center; 
         justify-content: center;
         background-color: blue;
         opacity: 0.5
         `
      return (
      <div>
         {listTest}
         <TestPortal style = {{'color' : 'red'}}>
            <p>Hello world!</p>
         </TestPortal>
      </div>
      )
   }
}

const TestPortal =(props)=>{ 
   const parentNode = document.createElement('div')
   document.body.appendChild(parentNode)
   


   return ReactDOM.createPortal(
      <div style={props.style}>
         {props.children}
      </div> , parentNode
   )
}

TestPortal.defaultProps ={ 
   style: {'color' : 'green'} 
}

TestPortal.propType = { 
   style: PropType.object
}

export default TestRef