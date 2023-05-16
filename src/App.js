import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Loginadmin from './Components/Login/Loginadmin';
import Loginprof from './Components/Login/Loginprof';

function App() {
  return (
    <>
       <Navbar/>
       
    <Routes>
      <Route path="/"  element={<Home />} />
      <Route path="/Loginadmin"  element={<Loginadmin/>} />
      <Route path="/Loginprof"  element={<Loginprof />} />
    </Routes>
    </>
  );
}

export default App;
