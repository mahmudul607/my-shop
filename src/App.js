import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Fruits from './components/Fruits/Fruits';
import About from './components/About/About';
import Mango from './components/Mango/Mango';
import Banana from './components/Banana/Banana';
import Jam from './components/Jam/Jam';
import Lichu2 from './components/Lichu2/Lichu2';
import Product from './components/Product/Product';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/fruits' element={ <Fruits/> }></Route>
        <Route path='/mango' element={ <Mango/> }></Route>
        <Route path='/banana' element={ <Banana/> }></Route>
        <Route path='/jam' element={ <Jam/> }></Route>
        <Route path='/lichu' element={<Lichu2/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
