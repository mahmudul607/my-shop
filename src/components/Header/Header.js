
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../foody-1.png'
function Home() {
  return (
    <>
    <div className='header-main-area'>
      
    
          <div className='header-area container'>
            <div className='endbg'></div>
          <ul className='header-main-ul'>
            <li className='header-logo'> <img src={logo} alt="#"/> </li>
            <li><Link to="../home">Home</Link></li>
            <li className='dropdown'><ul className='drop-menu'>Fruits
                  <li className='drop-item'>Mango</li>
                  <li className='drop-item'>Banana</li>
                  <li className='drop-item'>Jam</li>
                  <li className='drop-item'>Lichu</li>
            </ul>
            </li>
            <li><Link to="../about">About Us</Link></li>
            <li><Link to="../login">Login</Link></li>
          </ul>
          
          </div>
          </div>
    </>
  );
}

export default Home;