import './Navbar.css';
import logo from '../img/Logo.png'


function Navbar() {
  return (
    <>
      <div className='navbar'>
        <img className='logonav' src={logo}/>   
      </div>
    </>
  );
}

export default Navbar;
