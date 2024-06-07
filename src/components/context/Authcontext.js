import React, { createContext, useState,useEffect, useContext } from 'react';
import  axios from  'axios'
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [empData, setEmpData] = useState(''); 
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
      .then((response) => setData(response))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn,setIsLoggedIn, isAdmin, setIsAdmin, empData, setEmpData ,data}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
