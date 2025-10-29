import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './comp/header';
import Home from './pages/home';
import About from './pages/about';
import Destination from './pages/destination';
import Contact from './pages/contact';
import Register from './register';
import Footer from './comp/footer';
import Login from './login';
import ForgotPass from './pages/forgotpass';
import AddDestination from './pages/AddDestination';



function App() {

  return (
    <>
    <Router>
      <Header />
  <Routes>
    <Route excat path='/' element={<Home/>}/>
    <Route excat path='/abt' element={<About/>}/>
    <Route excat path='/des' element={<Destination/>}/>
    <Route excat path='/con' element={<Contact/>}/>
    <Route excat path='/reg' element={<Register/>}/>
    <Route excat path='/log' element={<Login/>}/>
    <Route excat path='/forgotpass' element={<ForgotPass/>}/>
    <Route excat path='/adddestination' element={<AddDestination/>}/>
  </Routes>
    <Footer />
    </Router>

    </>
  );
}

export default App;