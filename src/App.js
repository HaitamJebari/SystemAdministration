import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Admin from './Components/Admin/Admin';
import Prof from './Components/Prof/Prof';
import Notes from './Components/Prof/Notes/Notes';
import Eleve from './Components/Prof/Eleve/Eleve';
import Groups from './Components/Admin/Groups/Groups';
import Profs from './Components/Admin/Profs/Profs';
import Etudiants from './Components/Admin/Etudiants/Etudiants';


import Loginadmin from './Components/Login/Loginadmin';
import Loginprof from './Components/Login/Loginprof';

function App() {
  return (
    <>
       
          <Navbar/>
          <Routes>
              <Route path='/admin' element={<Admin/>} />
              <Route path='/admin/etudiants' element={<Etudiants/>} />
              <Route path='/admin/groups' element={<Groups/>} />
              <Route path='/admin/profs' element={<Profs/>} />

              <Route path='/prof' element={<Prof/>} />
              <Route path='/prof/notes' element={<Notes/>} />
              <Route path='/prof/eleve' element={<Eleve/>} />
              <Route path="/"  element={<Home />} />
              
              <Route path="/Loginadmin"  element={<Loginadmin/>} />
              <Route path="/Loginprof"  element={<Loginprof />} />
        
          </Routes>
       
       
    </>
  );
}

export default App;
