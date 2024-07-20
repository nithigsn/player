import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Error from './Pages/Error';
import { createContext, useState } from 'react';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import ProfilePage from './Pages/ProfilePage';


export const userContext = createContext();




function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const[id,setId]=useState('');




  return (

    <userContext.Provider value={{name,setName,email,setEmail, username, setUsername, password, setPassword, confirmPassword, setConfirmPassword,id,setId }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>

  );
}

export default App;
