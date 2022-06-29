import { Component } from "react";



class InpText extends Component {
   state = {
      text: ``
   }

   onChangeText = (newText)=>{ 
      this.setState(() => ({
         text: newText
      }))
   }


   render() { 

      const {text} = this.state

      return ( 
         <div>
            <input type="text" value={text} onChange={(event)=>{this.onChangeText(event.target.value)}} onKeyDown={(event)=>{event.target.value = event.target.value.replace(/\D/ims , "")}}/>
            <p>{text}</p>

         </div>
      )
   }
}


export default InpText