import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import './App.css';
import { Route, Routes, redirect } from 'react-router-dom';
import Login from './components/login/Login';
import Admin from './components/pages/admin/Admin';
import { User } from './components/pages/user/User';
import { users } from '../src/components/utils/utils';
import { useNavigate } from 'react-router-dom';
import NavBar from "./components/pages/navbar/NavBar"
import { Container } from 'react-bootstrap';


import { useAuth } from './components/context/Authcontext';

function App() {
  const navigater = useNavigate()
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) { 
      navigater("/")
    }
  }, [])

  return (
    <>
      {
        isLoggedIn && <NavBar />
      }
      <Container>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
