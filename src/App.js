import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './Mainpage/Mainpage';
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import Page4 from './Page4/Page4';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
      </Routes>
    </Router>
  );
}

export default App;
