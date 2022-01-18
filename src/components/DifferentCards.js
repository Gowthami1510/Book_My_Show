import Carousel from 'react-bootstrap/Carousel';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';


function DifferentCards()
{
    return(
        <div style={{padding:"50px"}}>
            <h2>The Best of Entertainment</h2>
            <Carousel indicators={false}>
  <Carousel.Item>
  <CardGroup style={{display:"flex",gap:"30px",justifyContent:"space-around"}}>
  <Card className="bg-dark text-white">
  <Card.Img src="nani.jpg" alt="Card image" />
  <Card.ImgOverlay>
   
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="poster6.jpg" alt="Card image" />
  <Card.ImgOverlay>
   
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="lovestory.jpg" alt="Card image" />
  <Card.ImgOverlay>
   
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="poster.jpg" alt="Card image" />
  <Card.ImgOverlay>
    
   
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="./poster2.jpg" alt="Card image" />
  <Card.ImgOverlay>
    
   
  </Card.ImgOverlay>
</Card>
</CardGroup>
    </Carousel.Item>

  <Carousel.Item>
  <CardGroup style={{display:"flex",gap:"30px",justifyContent:"space-around"}}>
  <Card className="bg-dark text-white">
  <Card.Img src="poster1.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title></Card.Title>
    <Card.Text>

    </Card.Text>
  
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="poster2.jpg" alt="Card image" />
  <Card.ImgOverlay>
    
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="poster3.jpg" alt="Card image" />
  <Card.ImgOverlay>
   
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="poster4.jpg" alt="Card image" />
  <Card.ImgOverlay>
   
  
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="./poster5.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
  
  </Card.ImgOverlay>
</Card>



  
</CardGroup>
    
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default DifferentCards;