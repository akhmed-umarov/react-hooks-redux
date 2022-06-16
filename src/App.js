import { Component } from 'react';
import './App.css';




class WhoAmI extends Component { 

  constructor(props){ 
      super(props);
  }

  render() { 
    return (
      <div>   
      <h1>My name is {props.name} , surname - {props.surname}</h1>
      <a href={props.link}></a>
      </div>
    )
  }

}



// function WhoAmI (props) { 
//   return ( 
    // <div>   
    //   <h1>My name is {props.port.name} , surname - {props.port.surname}</h1>
    //   <a href={props.link}></a>
    // </div>
//   )
// }



// function WhoAmIThree ({name , surname , link}) { 
//   return ( 
//     <div>   
//       <h1>My name is {name} , surname - {surname}</h1>
//       <a href={link}></a>
//     </div>
//   )
// }



// function WhoAmISec (props) { 
//   return ( 
//     <div>   
//       <h1>My name is {props.name} , surname - {props.surname}</h1>
//       <a href={props.link}></a>
//     </div>
//   )
// }



function App() {
  return (
    <div className="App">
      {/* <WhoAmISec name="Akhmed"  surname="Umarov" link="/"/> */}
      <WhoAmI name="Ilyas"  surname="Umarov" link="/"/>
      {/* <WhoAmIThree name='Amina' surname= 'Umarova' link ='/'/> */}
    </div>
  );
}



export default App;
