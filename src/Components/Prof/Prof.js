import './Prof.css';
import { Link } from "react-router-dom";


function Prof() {
  return (
    <>
        <div className="sidebar">
            <header><Link to='/'></Link></header>
                <ul>
                  <li className="linkRoute">
                    <Link>
                       Gestion des notes
                    </Link>
                  </li >
                  <li className="linkRoute">
                    <Link >
                       Gestion des éleve
                    </Link>
                </li>
                </ul>
          </div> 
          <h1>Bienvenue Sur L’espace Prof</h1>   
   </>
  );
}

export default Prof;
