import './App.css';
import {React, useEffect} from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import {LandingPage} from './components/LandingPage/LandingPage.jsx';
import Home from './components/Home/home';
import Navbar from './components/NavBar/NavBar';
import { useDispatch } from 'react-redux';
import {allRecipesApi} from "./Redux/petitionsApi.js"

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    allRecipesApi(dispatch);
  },[dispatch]);
  
  return (
      <BrowserRouter> 
    <div className="App">
      <Routes>
          <Route path= '/' element= {<LandingPage/>}/>
          <Route path= '/Home' element= {<Home/>}/>
          {/* <Route path= '/Recipe' element= {<Form/>}/> */}
          {/* <Route path= '/Detail' component= {<Detail/>}/> */}
      </Routes>
          <Navbar/>
    </div>
      </BrowserRouter>
  );
}

export default App;