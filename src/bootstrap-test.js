import { Container , Row , Col , Carousel} from "react-bootstrap";
import styled from "styled-components";



///нельзя брать с помощью CSSinJS и менять объекты с BootstrapReact
// const ColMy = styled(Container)`
// color: 'red' ;
// `; 



const BootstrapTest = () => {
   return ( 
      
         <Container className = "mt-5 mb-5">
      <Row>
         <Col>1 of 2</Col>
         <Col> <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{
         height: '250px'
      }}
      src="https://media.istockphoto.com/photos/space-milky-way-picture-id1170047942?s=612x612"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> </Col>
      </Row>
      </Container>
   )
}


export default BootstrapTest