//import './App.css';
//import {Routes} from 'react'
import {Route, BrowserRouter} from 'react-router-dom';
import {LandingPage} from './components/LandingPage/LandingPage.jsx';
//import Home from './components/Home/home';
//import Form from './components/Form/';
//import Detail from './components/Detail/';

import "./App.css";
//import SearchBar from "./components/SearchBar/SearchBar";


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Route path= '/' component= {LandingPage}/>
      </BrowserRouter>
    </div>
  );
}

export default App;