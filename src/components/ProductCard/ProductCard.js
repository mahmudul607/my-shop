import React from 'react';
import { Card } from 'react-bootstrap';
import { FaWeight } from 'react-icons/fa';
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faSackDollar } from '@fortawesome/free-solid-svg-icons';



const ProductCard = (props) => {

    const product = props.pd;

    return (
        
            <Card style={{width:'22%', height:'400px'}}>
            <Card.Img style={{width:'90%', height:'50%'}} variant="top" src={product.imgUrl} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
             
            
              <small className="text-muted"><FaWeight/> {product.store} <FontAwesomeIcon icon={faSackDollar} /> {product.price}    <button type="" style={{ marginLeft:'10px', padding:'2%'}}>Add to Cart</button></small>
            </Card.Footer>
          </Card>
       
    );
};

export default ProductCard;