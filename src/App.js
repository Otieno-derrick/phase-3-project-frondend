import React from 'react';
import AddEmployee from './Components/AddEmployee';
import Employees from './Components/Employees';
import EditUser from './Components/EditUser';
import NavBar from './Components/NavBar';
import WebFront from './Components/WebFront';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<WebFront />} />
        <Route path="/all" element={<Employees />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;