import { Component } from "react";
import React from "react";



class InpText extends Component {
   state = {
      text: this.props.text
      }

   onChangeText = (newText) => {
      this.setState(() => ({
         text: newText
      }))
   }

   onFocus = ()=>{ 
      this.state.refInp.current.focus()
   }

    setInputRef = elem => { 
      this.myRef = elem
    }

    componentDidMount() { 
      this.myRef.focus()
    }
   render() {

      const { text } = this.state

      return (
         <div>
            <input ref={this.setInputRef} type="text" value={text} onChange={(event)=>{this.onChangeText(event.target.value)}} onInput={(event)=>{event.target.value = event.target.value.replace(/\D/ims , "")}}/>
            <p onClick={this.onFocus} tabIndex={0}> B {text}</p>

         </div>
      )
   }
}



export default InpText