
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './FruitsCard.css';

const FruitsCard = (props) => {

    const pd = props.pd;
    
    
      return (
        <Col xl={4} md={3} sm={4} className='card-area'>
          <Card style={{height:'300px'}}>
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
          </Col>
      );
    }
    
    
export default FruitsCard;