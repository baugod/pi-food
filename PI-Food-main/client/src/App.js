import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {LandingPage} from './components/LandingPage/LandingPage.jsx';
import {Home} from './components/Home/home';
//import Form from './components/Form/';
//import Detail from './components/Detail/';

//import SearchBar from "./components/SearchBar/SearchBar";


function App() {
  return (
      <BrowserRouter> 
    <div className="App">
      <Routes>
        {/* <NavBar/> */}
          <Route path= '/' element= {<LandingPage/>}/>
          <Route path= '/Home' element= {<Home/>}/>
          {/* <Route path= '/Form' component= {<Form/>}/>
          <Route path= '/Detail' component= {<Detail/>}/> */}
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;