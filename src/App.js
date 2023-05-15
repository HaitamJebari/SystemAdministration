import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Admin from './Components/Admin/Admin';
import Prof from './Components/Prof/Prof';


function App() {
  return (
    <>
       <Router>
          <Navbar/>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/Admin' element={<Admin/>} />
              <Route path='/Prof' element={<Prof/>} />
          </Routes>
       </Router>
    </>
  );
}

export default App;
