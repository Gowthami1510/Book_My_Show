import Carousel from 'react-bootstrap/Carousel';

function ImageSlider()
{
    return(
        <div>
             <Carousel fade style={{background:"grey"}}>
  <Carousel.Item>
    <img style={{align:"center",marginLeft:"150px"}}
      className="d-block w-75"
      src="./nani.jpg"
      alt="First slide"
      height="350px"
    />
    <Carousel.Caption>
      <h3>Middle Class Abbayi</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{align:"center",marginLeft:"150px"}}
      className="d-block w-75"
      src="./pushpa.jfif"
      alt="Second slide"
      height="350px"
    />

    <Carousel.Caption>
      <h3>Pushpa</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{align:"center",marginLeft:"150px"}}
      className="d-block w-75"
      src="oxygen.jpg"
      alt="Third slide"
      height="350px"
    />

    <Carousel.Caption>
      <h3>Oxygen</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default ImageSlider;