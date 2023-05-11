import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Fruits from './components/Fruits/Fruits';
import About from './components/About/About';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/fruits' element={ <Fruits/> }></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
