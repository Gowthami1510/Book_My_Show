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
  <Card.Img src="card1.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="card2.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="card3.jfif" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>

  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="card4.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
   
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="./card5.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
   
  </Card.ImgOverlay>
</Card>
</CardGroup>
    </Carousel.Item>

  <Carousel.Item>
  <CardGroup style={{display:"flex",gap:"30px",justifyContent:"space-around"}}>
  <Card className="bg-dark text-white">
  <Card.Img src="poster1.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="poster2.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="poster3.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="poster4.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  
  </Card.ImgOverlay>
</Card>

<Card className="bg-dark text-white">
  <Card.Img src="./poster5.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
  </Card.ImgOverlay>
</Card>



  
</CardGroup>
    
  </Carousel.Item>
</Carousel>
        </div>
    );
}

export default DifferentCards;