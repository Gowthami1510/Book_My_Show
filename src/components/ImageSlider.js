import Carousel from 'react-bootstrap/Carousel';

function ImageSlider()
{
    return(
        <div>
             <Carousel fade style={{background:"grey"}}>
  <Carousel.Item>
    <img style={{align:"center",marginLeft:"150px"}}
      className="d-block w-75"
      src="./poster5.jpg"
      alt="First slide"
      height="350px"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{align:"center",marginLeft:"150px"}}
      className="d-block w-75"
      src="./poster6.jpg"
      alt="Second slide"
      height="350px"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{align:"center",marginLeft:"150px"}}
      className="d-block w-75"
      src="poster7.png"
      alt="Third slide"
      height="350px"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default ImageSlider;