import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import "./CardSlider.css";

function CardSlider()
{
    return(
        <div style={{padding:"50px", background:"lightgrey"}}>
            <h1>Recommended Movies</h1>
            <Carousel indicators={false}>
  <Carousel.Item>
  <CardGroup style={{display:"flex",justifyContent:"space-around",gap:"40px"}}>
  <Card style={{borderRadius:"25px"}} >
    <Card.Img class="images" variant="top" src="poster6.jpg" height="220px"/>
    <Card.Body>
      <Card.Title>Transformers</Card.Title>
      <Card.Text>
       History
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{borderRadius:"25px"}}>
    <Card.Img  class="images"variant="top" src="aranya.jpg" height="220px" />
    <Card.Body>
      <Card.Title>Aranya</Card.Title>
      <Card.Text>
        Thriller
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{borderRadius:"25px"}}>
    <Card.Img class="images" variant="top" src="lovestory.jpg" height="220px"/>
    <Card.Body>
      <Card.Title>lovestory</Card.Title>
      <Card.Text>
     Romantic
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{borderRadius:"25px"}}> 
    <Card.Img class="images" variant="top" src="nani.jpg" height="220px" />
    <Card.Body>
      <Card.Title>MCA</Card.Title>
      <Card.Text>
      Romantic
      </Card.Text>
    </Card.Body>
  </Card>

</CardGroup>
  </Carousel.Item>

  <Carousel.Item >
  <CardGroup  style={{display:"flex",justifyContent:"space-around",gap:"40px"}}>
  <Card style={{borderRadius:"25px"}}>
    <Card.Img class="images" variant="top" src="poster3.jpg" height="220px" />
    <Card.Body>
      <Card.Title>Lucifer</Card.Title>
      <Card.Text>
       Action Thriller
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{borderRadius:"25px"}}>
    <Card.Img class="images" variant="top" src="poster4.jpg" height="220px" />
    <Card.Body>
      <Card.Title>Avengers</Card.Title>
      <Card.Text>
       Action Thriller
      </Card.Text>
    </Card.Body>
  </Card>
 

  <Card style={{borderRadius:"25px"}}>
    <Card.Img class="images"variant="top" src="poster.jpg" height="220px"/>
    <Card.Body>
      <Card.Title>Horror</Card.Title>
      <Card.Text>
     Romantic
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{borderRadius:"25px"}}>
    <Card.Img class="images" variant="top" src="oxygen.jpg" height="220px" />
    <Card.Body>
      <Card.Title>Oxygen</Card.Title>
      <Card.Text>
      Suspense Thriller
      </Card.Text>
    </Card.Body>
  </Card>

</CardGroup>
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default CardSlider;