// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        </Routes>
    </Router>
  );
}
