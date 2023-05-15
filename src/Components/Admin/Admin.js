import './Admin.css';
import { Link} from "react-router-dom";


function Admin() {
  return (
    <>
        <div className="sidebar">
            <header><Link to='/'></Link></header>
                <ul>
                  <li className="linkRoute">
                    <Link>
                      Gestion des étudiants
                    </Link>
                  </li >
                  <li className="linkRoute">
                    <Link >
                      Gestion des groups
                    </Link>
                </li>
                  <li className="linkRoute">
                    <Link >
                      Gestion des profs
                    </Link>
                </li>
                </ul>
          </div> 
          <h1>Bienvenue Sur L’espace Admin</h1>   
   </>
  );
}

export default Admin;
