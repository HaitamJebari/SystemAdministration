import './Sidebar.css';
import { Link} from "react-router-dom";
import {FaBars , FaTimes} from 'react-icons/fa'

function SidebarAdmin() {
  return (
    <>
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check">
          <FaBars id="btn"/>
          <FaTimes id="cancel"/>
        </label>
        <div className="sidebar">
            <header><Link to='/'></Link></header>
                <ul>
                  <li className="linkRoute">
                    <Link to='/admin/Etudiants'>
                      Gestion des étudiants
                    </Link>
                  </li >
                  <li className="linkRoute">
                    <Link to='/admin/groups'>
                      Gestion des groups
                    </Link >
                </li>
                  <li className="linkRoute">
                    <Link to='/admin/profs'>
                      Gestion des profs
                    </Link>
                </li>
                </ul>
          </div> 
   </>
  );
}

export default SidebarAdmin;
