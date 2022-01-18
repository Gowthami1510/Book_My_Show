import Button from 'react-bootstrap/Button';

function Footer()
{
    return(
<div style={{background:"black",color:"white",padding:"40px",display:"flex", justifyContent:"space-between"}}>
    <p>Got a show or a movie or great experience ? Partner with us and get listed on bookmyshow.</p>
    <p>Contact 080-76768989</p>
    <Button variant="danger">Book My Show</Button> 
    
</div>
    );
}

export default Footer;