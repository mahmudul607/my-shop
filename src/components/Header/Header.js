
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../foody-1.png'
function Home() {
  return (
    <>
      
          <div className='header-area container'>
            
          
          <ul>
            <li className='header-logo'> <img src={logo} alt="#"/> </li>
            <li><Link to="../home">Home</Link></li>
            <li><Link to="../fruits">Fruits</Link></li>
            <li><Link to="../categories">Categories</Link></li>

            <li><Link to="../login">Login</Link></li>
            
            
          </ul>
          </div>
    </>
  );
}

export default Home;