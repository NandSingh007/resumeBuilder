import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Designe from './component/Designe';
import Header from './component/Header';
import ResumePageOne from './component/ResumePageOne';
import ResumePageSecond from './component/ResumePageSecond';
import ResumePageThird from './component/ResumePageThird';
import ResumePageFourth from './component/ResumePageFourth';
import About from './component/About';
import Myresume from './component/Myresume';

function App() {
  return (
    <div className="App">
      {/* Set up the router */}
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/myresume" element={<Myresume />} />
          <Route path="/desgine/:id" element={<Designe />} />
          <Route path="/resumefirst/:id" element={<ResumePageOne />} />
          <Route path="/resumesecond/:id" element={<ResumePageSecond />} />
          <Route path="/resumethird/:id" element={<ResumePageThird />} />
          <Route path="/resumeforth/:id" element={<ResumePageFourth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
