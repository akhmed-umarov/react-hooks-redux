import { Component ,  Fragment} from 'react';
import styled from 'styled-components';
import './App.css';
import BootstrapTest from './bootstrap-test';
import CountBtn from './components/countBtn/CountBtn';
import Message from './components/message/Message.js';
import InpText from './components/inpText/InpText';
///now we connect react-bootstrap 

//start

//если не использовать хуки то мы не сможем юзать динамические состояние в функциональных компонентах так как нелььзя заменять пропсы, для этого раньше использовали компоненты из классов

const Mybutton = styled.button`
width: 150px; 
color: ${props => props.active ? 'red' : 'blue'};
margin-top: 20px;
`

///офигенно удобно использовать пропсы внутри данной библиотеки , просто передаем значение пропсов в виде каллбек функций внутрь данного стиля
///можно вкладывать элемеенты внутрь других элементов как в обычном scss то есть эта штука поддерживает вложенность


class WhoAmI extends Component { 



    //setState рендерит заново весь компонент с новым состоянием которое в него закинуто
    //set

  constructor(props){ 
      super(props);

      this.state = { 
        years: 27, 
        text: '+++', 
        clg: `Hello`
      } 
      
      /// то есть мы берем метод из скласса ми присваиваем его к экземпляру класса , если делать через функцию так как там this будет терять свой контекст из за функции 
      // this.nextYear = this.nextYear.bind(this);
      //если писать через функцию обычную метод лучше использовать стрелочные методы, 
      //либо можно просто вызвать вызвать данную функцию через анонимную стрелочную функцию, так как стрелочная функция берет this у своего родителя то есть у экземпляра класса




      //setState меняет только те параметры которые были в нее переданы

      // this.nextYear = ()=> { 
      //   console.log(`object`);
      // }
  }                       
  //  так по идее мы должны были делать но за счет того что мы наследуем это все от компонента то мы можем это не писать










  nextYear = ()=> { 
    // console.log(this.state.clg);
    // this.setState({
    //   years: this.state.years + 1
    // })
    // this.setState(state => { 
    //   return { years : this.state.years +1 }
    // })    это тоже самое что написано снизу , т.e можно не писать реторн если я поставлю скобки круглые перед функцией

    console.log(this.state.clg);
    this.setState(state=> ({
      years: state.years + 1,
      clg: state.clg + `a`,       
    }))
  }
  

  changeInpText = (e) =>{ 
    this.setState({
      position: e.target.value
    })
  }



  render() { 


    const {name , surname , link , active} = this.props; 

    const {position , text , years} = this.state;
 
    return (
      <div>   
      <InpText/>
      <CountBtn render= {()=>(<Message text={`a net nefiga`}/>)}/>
      <Mybutton active={active} onClick={this.nextYear}>{text}</Mybutton>
      <h1>My name is {name} , surname - {surname} , age = {years} , {position}</h1>
      <a href={link}></a>
      <form>
        <input type="text" onChange={this.changeInpText}/>
      </form>
      </div>     ///вместо фрагмента писать можно 
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
      <BootstrapTest/>
      {/* <WhoAmISec name="Akhmed"  surname="Umarov" link="/"/> */}
      <WhoAmI name="Ilyas"  surname="Umarov" link="/" active/>
      <WhoAmI name="Ilyas"  surname="Umarov" link="/" />
      {/* <WhoAmIThree name='Amina' surname= 'Umarova' link ='/'/> */}
    </div>
  );
}



export default App;



///у компонента может быть внутреннее состояние которое динамически меняется , менять его можно с помощью setState указывая те параметры внутри в виде объекта с помощью которых необходимо будет заного прорендоврить наш компонент , внутри setState можно указывать значения компонента не через this так как там уже идет конкретизация , setState не меняет те значения которые туда не передают , state напрямую менять нельзя только через команду setState и лучше указывать в виде функции чтобы не было поломки в счетчиках (если операций больше чем они успевают выполнять), setState является асинхронной операцией поэтому ее надо уазывать в виде callback функции и объекта указаного в нем