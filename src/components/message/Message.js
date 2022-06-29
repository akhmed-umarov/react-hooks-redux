import PropType from "prop-type"
const Message = ({text , color})=>{ 
   return ( 
      <>
      <p style={{color: color}}>Hello world! -  {text}</p>
      </>
   )
}

Message.propType = { 
   color: PropType.string
}
Message.defaultProps = { 
   color: `red`
}
export default Message