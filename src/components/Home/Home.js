import React from 'react';
import FruitsCard from '../FruitsCard/FruitsCard';
import { Container, Row } from 'react-bootstrap';
import './Home.css'





const Home = () => {

const fol = [
    {
        title:'Mango',
        description:'Exported from Rajshahi',
        imgUrl:'https://i.ibb.co/0KcPYvH/natural-mango.jpg',
        key:1
    },
    {
        title:'Lichu',
        description:'Exported from Dinajpur',
        imgUrl:'https://i.ibb.co/0tdxbWQ/img-20190608-080555331.webp',
        key:2
    },
    {
        title:"Jam",
        description:'Exported from shirajgonj',
        imgUrl:'https://i.ibb.co/9GnLNgW/grafted-jamun-plants-036.jpg',
        key:3
    },
    {
        title:"Banana",
        description:'Exported from Noaga',
        imgUrl:'https://i.ibb.co/GJTwJ4d/2687319.webp',
        key:4
    }
]
    
    return (
        <>
        <Container className='categories-area'>
            
        
        <h1 style={{textAlign:'center', fontFamily:'cursive', textDecoration:'underline'}}>Categories</h1>
        {/* <div  style={{height:'300px', width:'95%', display:'flex', paddingLeft:'5%', overflow:'hidden'}}> */}
           <Row className='home-fruits-categories-area'>
           
                {
                fol.map(pd => <FruitsCard
                pd={pd}
                key={pd.key}
                ></FruitsCard> )
                }
                
            </Row>
        
        </Container>
        </>
    );
};

export default Home;