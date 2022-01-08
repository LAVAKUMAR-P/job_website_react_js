import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
}from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import UserLogin from './components/UserLogin';
import RecruiterLogin from './components/RecruiterLogin';

 

function App() {
  return (
   <Router>
   <Routes>
     <Route path="/" element={<Login/>} exact={true}/>
     <Route path="/register" element={<Register/>} exact={true}/>
     <Route path="/userLogin" element={<UserLogin/>} exact={true}/>
     <Route path="/recruiterLogin" element={<RecruiterLogin/>} exact={true}/>
   </Routes>
   </Router>
  );
}

export default App;
