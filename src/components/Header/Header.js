
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
            <li className='dropdown'><button className='dropbtn'><Link to="../product">Fruits</Link></button>
            <ul className='dropdown-content'>
                  <li className='drop-item'> <li><Link to="../mango">Mango</Link></li></li>
                  <li className='drop-item'> <li><Link to="../banana">Banana</Link></li></li>
                  <li className='drop-item'> <li><Link to="../jam">Jam</Link></li></li>
                  <li className='drop-item'> <li><Link to="../lichu">Lichu</Link></li></li>
              
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