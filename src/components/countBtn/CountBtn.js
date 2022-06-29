import { Component } from "react";
import PropType from "prop-type";


class CountBtn extends Component {
   state = {
      count: 0
   }

   AddCount = () =>{ 
      this.setState(({count})=>({
         count
      }))
   }



   render(){ 
      return( 
         <div>
            {this.props.render()}
            kak tvoi dela
         </div>
      )
   }
}


CountBtn.propType = { 
   count: PropType.number
}
CountBtn.defaultProps = {
   count: 0, 
   color: `red`
}


export default CountBtn;