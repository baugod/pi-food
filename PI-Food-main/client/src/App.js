import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Form from './components/Form';
import Detail from './components/Detail';

function App() {
  return (
  <BrowserRouter>
  <div className='App'>
    <Switch>
      <Route>
        <Route path="/" element={<LandingPage/>}/> 
        <Route path="/home" element={<Home/>}/>
        <Route path="/create" element={<Form/>}/>
        <Route path="/detail" element={<Detail/>}/>
      </Route>
    <Switch/>
  </div>
  </BrowserRouter>

  );
}

export default App;