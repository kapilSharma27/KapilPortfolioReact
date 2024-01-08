import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
// import Profile from './Components/Profile';
// import Skills from './Components/Skills';
// import About from './Components/About';
// Import other components as needed

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Home />
      {/* <Routes> */}
        {/* <Route path='/' element={<Home/>} /> */}
        {/* Define other routes as needed */}
        {/* <Route path='/Profile' element={<Profile/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Skills' element={<Skills/>} /> */}
      {/* </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;