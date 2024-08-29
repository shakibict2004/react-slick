
import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ban from "./assets/gaza.jpeg"
import ban1 from "./assets/gaza1.jpeg"
import ban2 from "./assets/gaza2.jpeg"
import ban3 from "./assets/gaza3.jpeg"

function App() {
  var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
  return (
    <Slider {...settings}>

  <div className="pick">
    <img src={ban} alt="" />
    <h2>pray for Philistine</h2>
    <p></p>
  </div>
  <div className="pick">
   <img src={ban1} alt="" />
   <h2>pray for Gaza</h2>
   <p></p>
  </div>
  <div className="div">
    <img src={ban2} alt="" />
    <h2>pray for Gaza</h2>
    <p></p>
  </div>
  <div className="div">
   <img src={ban3} alt="" />
   <h2>pray for Gaza</h2>
   <p></p>
  </div>

</Slider>
  )
}

export default App
