import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Error from './Pages/Error';
import { createContext, useState,useEffect } from 'react';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import ProfilePage from './Pages/ProfilePage';


export const userContext = createContext();




function App() {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const [password, setPassword] = useState(localStorage.getItem('password') || '');
  const [confirmPassword, setConfirmPassword] = useState(localStorage.getItem('confirmPassword') || '');
  const [id, setId] = useState(localStorage.getItem('id') || '');
  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem('email', email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  useEffect(() => {
    localStorage.setItem('password', password);
  }, [password]);

  useEffect(() => {
    localStorage.setItem('confirmPassword', confirmPassword);
  }, [confirmPassword]);

  useEffect(() => {
    localStorage.setItem('id', id);
  }, [id]);



  return (

    <userContext.Provider value={{ name, setName, email, setEmail, username, setUsername, password, setPassword, confirmPassword, setConfirmPassword, id, setId }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>

  );
}

export default App;
