import './Sidebar.css';
import admin from '../img/admin.jpg'
import { Link} from "react-router-dom";
import {FaMapMarker , FaUsers , FaUserGraduate , FaChalkboardTeacher } from 'react-icons/fa'

function SidebarAdmin() {
  return (
    <>
        {/* <div className="sidebar">
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

          </div>  */}
          
  <nav className="Sidebar">
  <img src={admin} className='admn'/>
      
      <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
              <li ><a href="/admin/etudiants" className="arrow"> Gestion des Étudiants</a></li>
              <li ><a href="/admin/groups" className="dropdown-toggle" >Gestion des Groupes</a></li>
          <li><a href="/admin/profs">Gestion des Professeurs</a></li>
        </ul>
     
      </div>
  </nav>

   </>
  );
}

export default SidebarAdmin;
