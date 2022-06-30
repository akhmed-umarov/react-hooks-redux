import { Component } from "react";
import React from "react";



class InpText extends Component {
   state = {
      text: this.props.text,
      refInp: React.createRef()
   }

   onChangeText = (newText) => {
      this.setState(() => ({
         text: newText
      }))
   }
   // componentDidMount() {
   //    this.state.refInp.current.onFocus()
   // }

   // componentDidMount() {
   //    this.state.refInp.current.focus()
   // }

   onFocus = ()=>{ 
      this.state.refInp.current.focus()
   }

   // componentDidMount(){ 
   //    this.state.refInp.current.focus()
   //мы можем использовать рефы только в классовых компонентах т.к. функциональные не имеют возможности создаватьб экземпляры надо
   // так же использовать ссылки надо только в компонентах жизненного цикла в 2-ух componentDidMount and componentDidUpdate так как они вызываются после того как компоненты былл создан или обновлен 
   // необходимо исопльзовать current у ссылки для того чтобы получить объект к которому идет ссылка и для того чтобы мы могли производить с ним некоторые манипуляции , current является уже объектом внутри настоящего дом дерева и с ним можно производить любые манипуляции которые мы можем использовать с помощью DOM-api как на примере сверху 
   //так же ссылку можно задавать на компоненты для того чтобы с помощью данных ссылок вызывать методы которые есть у данного компонента (но только у классовых )
   // ИСПОЛЬЗУЕТСЯ В ОСНОВНОМ ДЛЯ ФОКУСОВ И ИМПУТОВ ВНУТРИ РАЗЛИЧНЫХ ОБЪЕКТОВ 


   //КОГДА ИСПОЛЬЗУЕМ НА ОБЫЧНОМ ОБЪЕКТЕ ТАКОМ КАК (input focus div и тд и тп) мы получаем ссылку на данный объект уже в дом дереве , а если мы указываем ссылку для компонента то тут уже мы получаем ссылку на экземпляр класса , а он является объектом  мы не можем на нем использовать DOM-API лишь его собственные методы

   /// снизу пример того как установить фокус внутри компонента реакта с помощью реф но для этого придется использовать реф дважды 

   // }



   ///ссылку можно установить так же с помощью калбек функции без react.createRef()
   ///просто указав внутри компонента необходимого ref = {this.methodAddRef} , где methodAddRef будет являтся методом класса по добавлению ссылки в стате с помощью обычного this.myRef

   //methodAddRef = () =>{ 
   // if (this.MyRef){ this.MyRef.focus(); }          тут даже не надо использовать каррент так как ссылка записываюется напрямую у элемента у которого она вызвана 
    //}


    setInputRef = elem => { 
      this.myRef = elem
    }

    componentDidMount() { 
      this.myRef.focus()
    }
   render() {

      const { text , refInp } = this.state

      return (
         <div>
            <input ref={this.setInputRef} type="text" value={text} onChange={(event)=>{this.onChangeText(event.target.value)}} onInput={(event)=>{event.target.value = event.target.value.replace(/\D/ims , "")}}/>
            {/* <input ref={refInp} type="text" value={text} onChange={(event)=>{this.onChangeText(event.target.value)}} onKeyDown={(event)=>{event.target.value = event.target.value.replace(/\D/ims , "")}}/> */}
            {/* <Inp text={text} ref={refInp} onChangeText = {(e)=>{this.onChangeText(e)}}/> */}
            <p onClick={this.onFocus} tabIndex={0}> B {text}</p>

         </div>
      )
   }
}


// class Inp extends Component {
//    state = {
//       refU: React.createRef(), 
//       // text: this.props.text
//       text: ``
//    }

//    componentDidMount() {
//       this.state.refU.current.focus()
//    }

//    onFocus = () => {
//       console.log(`asdasd`);
//    }

//    onChangeText2 = (newText)=>{ 
//       this.setState(()=>({
//         text: newText
//       }))
//       this.props.onChangeText(this.state.text)
//    }

//    render() {
//       //но тогда надо будет выносить стате отсюда в основу и опять рендерить по новой
//       /// фигню делал но сделал 
//       const {text, refU } = this.state
//       return (
//          <input ref={refU} type="text" value={text} onChange={(e) => {this.onChangeText2(e.target.value) }} onKeyDown={(event) => { event.target.value = event.target.value.replace(/\D/ims, "") }} />
//       )
//    }
// }



export default InpText