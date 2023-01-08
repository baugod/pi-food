import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {LandingPage} from './components/LandingPage/LandingPage.jsx';
//import {Home} from './components/Home/home';
//import Form from './components/Form/Form';
//import Detail from './components/Detail/';
import Navbar from './components/NavBar/NavBar';
//import SearchBar from "./components/SearchBar/SearchBar";
//import { useDispatch } from 'react-redux';
//import { useEffect } from 'react';
//import {allRecipesApi, allDietsApi} from "./Redux/petitionsApi"

function App() {
  return (
      <BrowserRouter> 
    <div className="App">
      <Routes>
          <Route path= '/' element= {<LandingPage/>}/>
          {/* <Route path= '/Home' element= {<Home/>}/> */}
          {/* <Route path= '/Recipe' element= {<Form/>}/> */}
          {/* <Route path= '/Detail' component= {<Detail/>}/> */}
      </Routes>
          <Navbar/>
    </div>
      </BrowserRouter>
  );
}

export default App;