import React from 'react';
import './App.css';
import { 
  Route,
  Routes,
  BrowserRouter as Router,
} from 'react-router-dom';
import Home from './pages/home';
import Page1 from './pages/page1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/page1' Component={Page1}/>
      </Routes>
    </div>
  );
}

export default App;
