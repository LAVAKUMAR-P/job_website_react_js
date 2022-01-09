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
import UserRegister from './components/UserRegister';
import RecruiterRegister from './components/RecruiterRegister';
import RecruiterHome from './components/RecruiterHome.js';
import UserHome from './components/UserHome';
import Postjobform from './components/Postjobform';

 

function App() {
  return (
   <Router>
   <Routes>
     <Route path="/" element={<Login/>} exact={true}/>
     <Route path="/register" element={<Register/>} exact={true}/>
     <Route path="/userLogin" element={<UserLogin/>} exact={true}/>
     <Route path="/recruiterLogin" element={<RecruiterLogin/>} exact={true}/>
     <Route path="/userRegister" element={<UserRegister/>} exact={true}/>
     <Route path="/recruiterRegister" element={<RecruiterRegister/>} exact={true}/>
     <Route path="/Rhome" element={<RecruiterHome/>} exact={true}/>
     <Route path="/Uhome" element={<UserHome/>} exact={true}/>
     <Route path="/postjob" element={<Postjobform/>} exact={true}/>
   </Routes>
   </Router>
  );
}

export default App;
