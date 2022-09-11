import React from 'react';
import AddUser from './Components/AddUser';
import AllUsers from './Components/AllUsers';
import EditUser from './Components/EditUser';
import NavBar from './Components/NavBar';
import WebFront from './Components/WebFront'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<WebFront />} />
        <Route path="/all" element={<AllUsers />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;