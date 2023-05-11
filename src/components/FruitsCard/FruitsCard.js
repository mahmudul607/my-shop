import Card from 'react-bootstrap/Card';


const FruitsCard = (props) => {

    const pd = props.pd;
    
    
      return (
 
          <Card style={{width:'25%', height:'400px'}}>
            <Card.Img style={{width:'70%', height:'50%'}} variant="top" src={pd.imgUrl} />
            <Card.Body>
              <Card.Title>{pd.title}</Card.Title>
              <Card.Text>
                {pd.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">See more..</small>
            </Card.Footer>
          </Card>
      );
    }
    
    
export default FruitsCard;