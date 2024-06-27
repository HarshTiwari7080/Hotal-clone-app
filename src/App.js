import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register'
import Sales from './components/Sales';
import { Container, ToastContainer } from 'react-bootstrap';
import { userState } from 'react';
import Hotal1 from './components/Hotal1';
import Hotal2 from './components/hotal2';
import Hotal3 from './components/Hotal3';
import Booking from './components/Booking';



function App() {

  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Container className='mt-3'>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/sales' element={<Sales />} />
          <Route path='/hotal1' element={<Hotal1 />} />
          <Route path='/hotal2' element={<Hotal2 />} />
          <Route path='/hotal3' element={<Hotal3 />} />


        </Routes>
      </Container>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
