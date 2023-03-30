import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Login from './Login';


function App() {
  return (
    <div>
     <Router>
     <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
