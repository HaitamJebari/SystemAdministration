import './Navbar.css';
import logo from '../img/Logo.png'


function Navbar() {
  return (
    <>
      <div className='navbar'>
        <img src={logo} className='logonav'/>
      </div>
    </>
  );
}

export default Navbar;
